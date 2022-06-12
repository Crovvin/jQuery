let movieArray = [];
let index = 0;

$(function() {
    $("#movieSubmit").on("submit", function(event) {
        event.preventDefault();
        let movieTitle = $("#title").val();
        let movieRating = $("#rating").val();
        let submission = {movieTitle, movieRating, index};
        let appending = appendToTable(submission);
        index = index + 1;
        movieArray.push(submission);
        $("#tablebody").append(appending);
        $("#movieSubmit").trigger("reset");
    });

    $("tbody").on("click", ".btn", function(event){
        let index2 = movieArray.findIndex(x => x.index === +$(event.target).data("deleteId"));
        movieArray.splice(index2, 1);
        $(event.target) 
         .closest("tr")
         .remove();
    });

});

function appendToTable(input) {
    return `
        <tr>
            <td>${input.movieTitle}</td>
            <td>${input.movieRating}</td>
            <td> <button class = "btn" data-delete-id=${input.index}>Remove</button></td>
        <tr>
    `;
};