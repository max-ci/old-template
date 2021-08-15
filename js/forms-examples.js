$(function() {
  // Validation for login form
  $("#sky-form").validate({
    // Rules for form validation
    rules:
    {
      email:
      {
        required: true,
        email: true
      },
      password:
      {
        required: true,
        minlength: 3,
        maxlength: 20
      }
    },
    // Messages for form validation
    messages:
    {
      email:
      {
        required: 'Please enter your email address',
        email: 'Please enter a VALID email address'
      },
      password:
      {
        required: 'Please enter your password'
      }
    },
    // Do not change code below
    errorPlacement: function(error, element)
    {
      error.insertAfter(element.parent());
    }
  });

  // Validation for recovery form
  $("#sky-form2").validate(
  {
    // Rules for form validation
    rules:
    {
      email:
      {
        required: true,
        email: true
      }
    },
    // Messages for form validation
    messages:
    {
      email:
      {
        required: 'Please enter your email address',
        email: 'Please enter a VALID email address'
      }
    },
    // Ajax form submition
    submitHandler: function(form)
    {
      $(form).ajaxSubmit(
      {
        beforeSend: function()
        {
          $('#sky-form2 button[type="submit"]').attr('disabled', true);
        },
        success: function()
        {
          $("#sky-form2").addClass('submited');
        }
      });
    },
    // Do not change code below
    errorPlacement: function(error, element)
    {
      error.insertAfter(element.parent());
    }
  });

  // Validation
  $("#sky-form3").validate(
  {
    // Rules for form validation
    rules:
    {
      username:
      {
        required: true
      },
      email:
      {
        required: true,
        email: true
      },
      password:
      {
        required: true,
        minlength: 3,
        maxlength: 20
      },
      passwordConfirm:
      {
        required: true,
        minlength: 3,
        maxlength: 20,
        equalTo: '#password'
      },
      firstname:
      {
        required: true
      },
      lastname:
      {
        required: true
      },
      gender:
      {
        required: true
      },
      terms:
      {
        required: true
      }
    },

    // Messages for form validation
    messages:
    {
      login:
      {
        required: 'Please enter your login'
      },
      email:
      {
        required: 'Please enter your email address',
        email: 'Please enter a VALID email address'
      },
      password:
      {
        required: 'Please enter your password'
      },
      passwordConfirm:
      {
        required: 'Please enter your password one more time',
        equalTo: 'Please enter the same password as above'
      },
      firstname:
      {
        required: 'Please select your first name'
      },
      lastname:
      {
        required: 'Please select your last name'
      },
      gender:
      {
        required: 'Please select your gender'
      },
      terms:
      {
        required: 'You must agree with Terms and Conditions'
      }
    },

    // Do not change code below
    errorPlacement: function(error, element)
    {
      error.insertAfter(element.parent());
    }
  });

  // Validation
  $("#sky-form4").validate(
  {
    // Rules for form validation
    rules:
    {
      name:
      {
        required: true
      },
      email:
      {
        required: true,
        email: true
      },
      review:
      {
        required: true,
        minlength: 20
      },
      quality:
      {
        required: true
      },
      reliability:
      {
        required: true
      },
      overall:
      {
        required: true
      }
    },

    // Messages for form validation
    messages:
    {
      name:
      {
        required: 'Please enter your name'
      },
      email:
      {
        required: 'Please enter your email address',
        email: 'Please enter a VALID email address'
      },
      review:
      {
        required: 'Please enter your review'
      },
      quality:
      {
        required: 'Please rate quality of the product'
      },
      reliability:
      {
        required: 'Please rate reliability of the product'
      },
      overall:
      {
        required: 'Please rate the product'
      }
    },

    // Ajax form submition
    submitHandler: function(form)
    {
      $(form).ajaxSubmit(
      {
        beforeSend: function()
        {
          $('#sky-form4 button[type="submit"]').attr('disabled', true);
        },
        success: function()
        {
          $("#sky-form4").addClass('submited');
        }
      });
    },

    // Do not change code below
    errorPlacement: function(error, element)
    {
      error.insertAfter(element.parent());
    }
  });

  // Validation
  $("#sky-form-contact").validate(
  {
    // Rules for form validation
    rules:
    {
      name:
      {
        required: true
      },
      email:
      {
        required: true,
        email: true
      },
      subject:
      {
        required: true
      },
      message:
      {
        required: true,
        minlength: 10
      }
    },

    // Messages for form validation
    messages:
    {
      name:
      {
        required: 'Enter your name',
      },
      email:
      {
        required: 'Enter your email address',
        email: 'Enter a VALID email'
      },
      subject:
      {
        email: 'This field is required'
      },
      message:
      {
        required: 'This field is required'
      }
    },

    // Ajax form submition
    submitHandler: function(form)
    {
      $(form).ajaxSubmit(
      {
        success: function()
        {
          $("#sky-form-contact").find('button[type="submit"]').addClass('btn-activated');
          setTimeout(function()
          {
            $("#sky-form-contact").addClass('submited');

          }, 2000);
        }
      });
    },

    // Do not change code below
    errorPlacement: function(error, element)
    {
      error.insertAfter(element.parent());
    }
  });

  // Regular slider
  $('#slider1').slider({
    min: 0,
    max: 500,
    slide: function(event, ui)
    {
      $('#slider1-value').text(ui.value);
    }
  });

  // Range slider
  $('#slider2').slider({
    min: 0,
    max: 500,
    range: true,
    values: [75, 300],
    slide: function(event, ui)
    {
      $('#slider2-value1').text(ui.values[0]);
      $('#slider2-value2').text(ui.values[1]);
    }
  });

  // Step slider
  $('#slider3').slider({
    min: 0,
    max: 500,
    step: 100,
    slide: function(event, ui)
    {
      $('#slider3-value').text(ui.value);
    }
  });

  $('input[type="checkbox"]:checked, input[type="radio"]:checked').addClass('checked');
  $('.sky-form').on('change', 'input[type="radio"]', function()
  {
    $(this).closest('.sky-form').find('input[name="' + $(this).attr('name') + '"]').removeClass('checked');
    $(this).addClass('checked');
  });
  $('.sky-form').on('change', 'input[type="checkbox"]', function()
  {
    $(this).toggleClass('checked');
  });

  // Regular datepicker
  $('#date').datepicker({
    dateFormat: 'dd.mm.yy',
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>'
  });

  // Date range
  $('#start').datepicker({
    dateFormat: 'dd.mm.yy',
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    onSelect: function( selectedDate )
    {
      $('#finish').datepicker('option', 'minDate', selectedDate);
    }
  });
  $('#finish').datepicker({
    dateFormat: 'dd.mm.yy',
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    onSelect: function( selectedDate )
    {
      $('#start').datepicker('option', 'maxDate', selectedDate);
    }
  });

  // Inline datepicker
  $('#inline').datepicker({
    dateFormat: 'dd.mm.yy',
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>'
  });

  // Inline date range
  $('#inline-start').datepicker({
    dateFormat: 'dd.mm.yy',
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    onSelect: function( selectedDate )
    {
      $('#inline-finish').datepicker('option', 'minDate', selectedDate);
    }
  });
  $('#inline-finish').datepicker({
    dateFormat: 'dd.mm.yy',
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    onSelect: function( selectedDate )
    {
      $('#inline-start').datepicker('option', 'maxDate', selectedDate);
    }
  });

  // Masking
  $("#date1").mask('99/99/9999', {placeholder:'X'});
  $("#phone").mask('(999) 999-9999', {placeholder:'X'});
  $("#card").mask('9999-9999-9999-9999', {placeholder:'X'});
  $("#serial").mask('***-***-***-***-***-***', {placeholder:'_'});
  $("#tax").mask('99-9999999', {placeholder:'X'});

  // Validation
  $("#sky-form-validation").validate(
  {
    // Rules for form validation
    rules:
    {
      required:
      {
        required: true
      },
      email:
      {
        required: true,
        email: true
      },
      url:
      {
        required: true,
        url: true
      },
      date:
      {
        required: true,
        date: true
      },
      min:
      {
        required: true,
        minlength: 5
      },
      max:
      {
        required: true,
        maxlength: 5
      },
      range:
      {
        required: true,
        rangelength: [5, 10]
      },
      digits:
      {
        required: true,
        digits: true
      },
      number:
      {
        required: true,
        number: true
      },
      minVal:
      {
        required: true,
        min: 5
      },
      maxVal:
      {
        required: true,
        max: 100
      },
      rangeVal:
      {
        required: true,
        range: [5, 100]
      }
    },

    // Messages for form validation
    messages:
    {
      required:
      {
        required: 'Please enter something'
      },
      email:
      {
        required: 'Please enter your email address'
      },
      url:
      {
        required: 'Please enter your URL'
      },
      date:
      {
        required: 'Please enter some date'
      },
      min:
      {
        required: 'Please enter some text'
      },
      max:
      {
        required: 'Please enter some text'
      },
      range:
      {
        required: 'Please enter some text'
      },
      digits:
      {
        required: 'Please enter some digits'
      },
      number:
      {
        required: 'Please enter some number'
      },
      minVal:
      {
        required: 'Please enter some value'
      },
      maxVal:
      {
        required: 'Please enter some value'
      },
      rangeVal:
      {
        required: 'Please enter some value'
      }
    },

    // Do not change code below
    errorPlacement: function(error, element)
    {
      error.insertAfter(element.parent());
    }
  });
});