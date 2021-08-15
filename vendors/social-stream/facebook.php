<?php
require_once( 'Facebook/HttpClients/FacebookHttpable.php' );
require_once( 'Facebook/HttpClients/FacebookCurl.php' );
require_once( 'Facebook/HttpClients/FacebookCurlHttpClient.php' );
require_once( 'Facebook/Entities/AccessToken.php' );
require_once( 'Facebook/Entities/SignedRequest.php' );
require_once( 'Facebook/FacebookSession.php' );
require_once( 'Facebook/FacebookRedirectLoginHelper.php' );
require_once( 'Facebook/FacebookRequest.php' );
require_once( 'Facebook/FacebookResponse.php' );
require_once( 'Facebook/FacebookSDKException.php' );
require_once( 'Facebook/FacebookRequestException.php' );
require_once( 'Facebook/FacebookOtherException.php' );
require_once( 'Facebook/FacebookAuthorizationException.php' );
require_once( 'Facebook/GraphObject.php' );
require_once( 'Facebook/GraphSessionInfo.php' );

use Facebook\HttpClients\FacebookHttpable;
use Facebook\HttpClients\FacebookCurl;
use Facebook\HttpClients\FacebookCurlHttpClient;
use Facebook\Entities\AccessToken;
use Facebook\Entities\SignedRequest;
use Facebook\FacebookSession;
use Facebook\FacebookRedirectLoginHelper;
use Facebook\FacebookRequest;
use Facebook\FacebookResponse;
use Facebook\FacebookSDKException;
use Facebook\FacebookRequestException;
use Facebook\FacebookOtherException;
use Facebook\FacebookAuthorizationException;
use Facebook\GraphObject;
use Facebook\GraphSessionInfo;

// SET YOUR FACEBOOK API DETAILS HERE
$app_id 	= 'ENTER YOUR APP ID';
$app_secret = 'ENTER YOUR APP SECRET';
$app_access_token = 'ENTER YOUR ACCESS TOKEN';

// DO NOT EDIT BELOW THIS LINE
ini_set('display_errors', '0');
error_reporting(E_ALL | E_STRICT);

$page_id = isset($_GET['id']) ? $_GET['id'] : '';
$limit = isset($_GET['limit']) ? $_GET['limit'] : 20;

// start session
session_start();

// init app with app id and secret
FacebookSession::setDefaultApplication( $app_id,$app_secret );
$session = new FacebookSession($app_access_token);

// graph api request for user data
$request = new FacebookRequest( $session, 'GET', '/'.$page_id.'/posts?limit='.$limit );
$response = $request->execute();
// get response
$graphObject = $response->getGraphObject()->asArray();
$pagefeed = $graphObject['data'];
$count = 0;
$link_url = '';
$json_decoded = array();

$json_decoded['responseData']['feed']['link'] = "";
if(is_array($pagefeed)) {

	foreach($pagefeed as $data)
	{
		
		if(isset($data->message))
		{
			$message = $data->message;
		} else if(isset($data->story))
		{
			$message = $data->story;
		} else {
			$message = '';
		}
		
		if(isset($data->description))
		{
			$message .= ' ' . $data->description;
		}
		
		$link = isset($data->link) ? $data->link : '';
		$image = isset($data->picture) ? $data->picture : null;
		$type = isset($data->type) ? $data->type : '';
		
		if($link_url == $link){
			continue;
		}
		
		$link_url = $link;
		
		if($message == '' || $link == '') {
		//	continue;
		}
		
		if($type == 'status' && isset($data->story)) {
			continue;
		}
		
		if($type == 'event') {
			$link = 'https://facebook.com' . $link;
		}

		if(!isset($data->object_id)) {
			$pic_id = explode("_", $image);	
			if(isset($pic_id[1])){
				$data->object_id = $pic_id[1];
			}
		}
		
		if(isset($data->object_id)){
		
			if(strpos($image, 'safe_image.php') === false && is_numeric($data->object_id)) {
				$image = 'http://graph.facebook.com/'.$data['object_id'].'/picture?type=normal';
			}
		
		}

		$json_decoded['responseData']['feed']['entries'][$count]['link'] = $link;
		$json_decoded['responseData']['feed']['entries'][$count]['content'] = $message;
		$json_decoded['responseData']['feed']['entries'][$count]['thumb'] = $image;
		$json_decoded['responseData']['feed']['entries'][$count]['publishedDate'] = date("D, d M Y H:i:s O", strtotime($data->created_time));
		$count++;
	}
}

header("Content-Type: application/json; charset=UTF-8");
echo json_encode($json_decoded);
?>