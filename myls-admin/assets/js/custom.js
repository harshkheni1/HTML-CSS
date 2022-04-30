jQuery(document).ready(function () {

  // new WOW().init();

  $('#tips-video').lightGallery();

  var current_progress = 0;
  var interval = setInterval(function () {
    current_progress += 10;
    $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
    if (current_progress >= 100)
      clearInterval(interval);
  }, 1000);

  $(".main-loader").hide();
  $("#btnlogin").click(function () {
    $('.main-loader').show();
    setTimeout(function () {
      $(".main-loader").hide();
      window.location.href = 'dashboard.html';
    }, 10000);
  });

  // //Initialize Select2 Elements
  // $('.select2').select2();
  // $('.select2bs4').select2({
  //   theme: 'bootstrap4'
  // });

  //  $("#vertical-menu-btn").click(function(e){
  //     $('body').toggleClass("sidebar-enable vertical-collpsed");
  //     e.preventDefault();
  // });
  // $('#side-menu').metisMenu({ 
  //     toggle: false // disable the auto collapse. Default: true.
  // });

  $("#next-step-two").click(function () {
    // alert("button");
    $("#case").removeClass('active');
    $("#casetab").removeClass('active');
    $("#retainer").addClass('active');
    $("#retainertab").addClass('active');
    $("#invoice").removeClass('active');
    $("#invoicetab").removeClass('active');
    $("#addevent").removeClass('active');
    $("#eventtab").removeClass('active');
  });
  $("#next-step-three").click(function () {
    // alert("button");
    $("#case").removeClass('active');
    $("#casetab").removeClass('active');
    $("#retainer").removeClass('active');
    $("#retainertab").removeClass('active');
    $("#invoice").addClass('active');
    $("#invoicetab").addClass('active');
    $("#addevent").removeClass('active');
    $("#eventtab").removeClass('active');
  });
  $("#next-step-four").click(function () {
    // alert("button");
    $("#case").removeClass('active');
    $("#casetab").removeClass('active');
    $("#retainer").removeClass('active');
    $("#retainertab").removeClass('active');
    $("#invoice").removeClass('active');
    $("#invoicetab").removeClass('active');
    $("#addevent").addClass('active');
    $("#eventtab").addClass('active');
  });
  $("#prev-step-one").click(function () {
    // alert("button");
    $("#case").addClass('active');
    $("#casetab").addClass('active');
    $("#retainer").removeClass('active');
    $("#retainertab").removeClass('active');
    $("#invoice").removeClass('active');
    $("#invoicetab").removeClass('active');
    $("#addevent").removeClass('active');
    $("#eventtab").removeClass('active');
  });
  $("#prev-step-two").click(function () {
    // alert("button");
    $("#case").removeClass('active');
    $("#casetab").removeClass('active');
    $("#retainer").addClass('active');
    $("#retainertab").addClass('active');
    $("#invoice").removeClass('active');
    $("#invoicetab").removeClass('active');
    $("#addevent").removeClass('active');
    $("#eventtab").removeClass('active');
  });
  $("#prev-step-three").click(function () {
    // alert("button");
    $("#case").removeClass('active');
    $("#casetab").removeClass('active');
    $("#retainer").removeClass('active');
    $("#retainertab").removeClass('active');
    $("#invoice").addClass('active');
    $("#invoicetab").addClass('active');
    $("#addevent").removeClass('active');
    $("#eventtab").removeClass('active');
  });

  $("#case-summary-chart").hide();

  $("#btn-case-chart").click(function () {
    $("#case-summary-chart").show();
    $("#case-summary-list").hide();
  });
  $("#btn-case-list").click(function () {
    $("#case-summary-chart").hide();
    $("#case-summary-list").show();
  });

  $("#case-summary-chart").hide();

  $("#side-add-task").hide();

  $("#right-bar-toggle-event").click(function () {
    $("#side-add-event").show();
    $("#side-add-task").hide();
  });

  $("#right-bar-toggle-task").click(function () {
    $("#side-add-event").hide();
    $("#side-add-task").show();
  });

  // Case Summary in Case Notes
  $("#edit-summary").hide();
  $("#btn-summary-edit").click(function () {
    $("#edit-summary").show();
    $("#disp-summary").hide();
  });
  $("#btn-summary-cancel").click(function () {
    $("#edit-summary").hide();
    $("#disp-summary").show();
  });

  // Case Strategy in Case Notes
  $("#edit-strategy").hide();
  $("#btn-strategy-edit").click(function () {
    $("#edit-strategy").show();
    $("#disp-strategy").hide();
  });
  $("#btn-strategy-cancel").click(function () {
    $("#edit-strategy").hide();
    $("#disp-strategy").show();
  });

  // Intake
  $("#intakeinfo").hide();
  $("#btn-newclient").click(function () {
    $("#intakeinfo").show();
    $("#intakeimg").hide();
  });
  $("#btn-existingclient").click(function () {
    $("#intakeinfo").show();
    $("#intakeimg").hide();
  });
  $("#btn-intakeback").click(function () {
    $("#intakeinfo").hide();
    $("#intakeimg").show();
  });

  $('#timesheet-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    // items:4,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  $('.right-bar-tips').on('click', function (e) {
    $('body').addClass('right-bar-enabled');
    e.stopPropagation();
  });

  // Tips Answer - Question 
  $("#tips-answer").hide();
  $("#show-answer").click(function () {
    $("#tips-answer").show();
    $("#tips-question").hide();
  });
  $("#answer-back").click(function () {
    $("#tips-answer").hide();
    $("#tips-question").show();
  });

  // Success Toaster 
  $("#btn-stopright").click(function () {
    $("#stopright").show();
    setTimeout(function () {
      $("#stopright").hide();
    }, 3000);
  });
  $("#btn-sbottomright").click(function () {
    $("#sbottomright").show();
    setTimeout(function () {
      $("#sbottomright").hide();
    }, 3000);
  });
  $("#btn-sbottomleft").click(function () {
    $("#sbottomleft").show();
    setTimeout(function () {
      $("#sbottomleft").hide();
    }, 3000);
  });
  $("#btn-stopleft").click(function () {
    $("#stopleft").show();
    setTimeout(function () {
      $("#stopleft").hide();
    }, 3000);
  });

  // Danger Toaster 
  $("#btn-dtopright").click(function () {
    $("#dtopright").show();
    setTimeout(function () {
      $("#stopright").hide();
    }, 3000);
  });
  $("#btn-dbottomright").click(function () {
    $("#dbottomright").show();
    setTimeout(function () {
      $("#dbottomright").hide();
    }, 3000);
  });
  $("#btn-dbottomleft").click(function () {
    $("#dbottomleft").show();
    setTimeout(function () {
      $("#dbottomleft").hide();
    }, 3000);
  });
  $("#btn-dtopleft").click(function () {
    $("#dtopleft").show();
    setTimeout(function () {
      $("#dtopleft").hide();
    }, 3000);
  });

  // Live Search
  $("#searchtextbox").on("keyup", function () {
    if ($('#searchtextbox').val() != "") {
      $('#livesearch').css('display', 'block');
    } else {
      $('#livesearch').css('display', 'none');
    }
    var value = $(this).val().toLowerCase();
    $("#livesearch-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $(".searchclick").on("click", function(){
    // Perform your action on click here, like redirecting to a new url
    window.location = 'http://techhive.co.in/demo/myls-admin/case-notes';
  })



});
// Live Search
$('#searchtextbox').focusout(function () {
  // $('#livesearch').css('display', 'none');
  $('#searchtextbox').val('');
})

// jQuery(function ($) {

// });

// $(document).ready(function () {


// });
// (function ($) {
//     "use strict";

// })(jQuery);


function customRedirect(position) {

  if (position == 1) {
    window.location.href = 'http://techhive.co.in/demo/myls-admin/create-new-case';
  }

  if (position == 2) {
    window.location.href = 'http://techhive.co.in/demo/myls-admin/task-add';
  }

  if (position == 3) {
    window.location.href = 'http://techhive.co.in/demo/myls-admin/mail-add';
  }
}

FusionCharts.ready(function () {
  var revenueChart = new FusionCharts({
    type: "doughnut2d",
    renderAt: "chart-container",
    width: "400",
    height: "330",
    dataFormat: "json",
    dataSource: {
      chart: {
        showValue: "0",
        plotBorderThickness: "1",
        borderThickness: "1",
        animation: "0",
        enableSmartLabels: "0",
        showPlotBorder: "1",
        showLegend: "0",
        plotBorderColor: "#f2f2f2f",
        plotBorderThickness: "1",
        defaultCenterLabel: "230\nCases",
        centerLabelPadding: "0",
        centerLabelTextPadding: "0",
        centerLabelBorderRadius: "0",
        pieRadius: "150",
        centerLabelFontSize: "26",
        baseFontSize: "16",
        doughnutRadius: "150",
        startingAngle: "90",
        enableSlicing: "0",
        theme: "fint"
      },
      data: [
        {
          label: "Approved",
          value: "40",
          color: "#55D8FE",
          showLabel: "0",
          showValue: "0"
        },
        {
          label: "Closed",
          value: "15",
          color: "#FF8373",
          showLabel: "0",
          showValue: "0"
        },
        {
          label: "New Case",
          value: "15",
          color: "#A3A0FB",
          showLabel: "0",
          showValue: "0"
        },
        {
          label: "Pending Case",
          value: "30",
          color: "#FFDA83",
          showLabel: "0",
          showValue: "0"
        },
      ]
    }
  }).render();
});


$(window).on('load', function () {
  // $('.loading').hide();
  $(".loading").fadeOut(700);

});