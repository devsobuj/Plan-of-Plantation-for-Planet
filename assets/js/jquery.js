window.onscroll = function () {

    // Get the navbar
    var main__header = document.querySelector(".main-header");

    if (window.pageYOffset >= 20) {
        main__header.classList.add("fixed_top");
    } else {
        main__header.classList.remove("fixed_top");
    }

};



$(document).ready(function() {
    
    //when the Add Field button is clicked
    $("#add").click(function(e) {
    //   $(".delete").fadeIn("1500");
      //Append a new row of code to the "#items" div
      $("#file_uploads").append(
        '<div class="row mb-3 next-file-upload-field"><label for="file" class="form-label">Add File (Reuseme) </label><div class="col-sm-11"><input type="file" class="form-control" id="file[]" required></div><div class="col-sm-1"><a class="btn btn-danger" id="delete"><i class="fa fa-minus"></i></a></div></div>'
      );
    });
    $("body").on("click", "#delete", function(e) {
      $(".next-file-upload-field").last().remove();
    });
});

  