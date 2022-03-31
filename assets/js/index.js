// Bellow code is written in jquery , to Write jquery import jquery CDN before end of <body> tag


// after adding new user pop up

$("#add_user").submit(function(event)
{
    alert("Data Inserted Successfully!");
})



// after Update user pop up and making submit button functional 

/*
we are accessing the form using #update_user

*/
$("#update_user").submit(function(event){

    // we are preventing the default behaviour of the browser, default behaviour of the browser is when you click submit it will reload. so bellow statement will stop this
    event.preventDefault();

    // using bellow statement we will get all the data from the submitted from data will be stored in unindexed_array variable 
    // instead of using $(this), you can use $(#update_user)
    //serializeArray() method is going to return an serialize array of the data when you click on submit button

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})


// to delete record 

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){

        // this data-id variable is present in _show.ejs
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?"))
        {
            $.ajax(request).done(function(response)
            {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}

