function main() 
{
    console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");

    //if you need authentication to the server 
    //set document.cookie to include previously set cookies
    //see https://stackoverflow.com/a/50256898
    document.cookie="SESSION=000kdkd943ijd";

    $.ajax
    ({
        //using authentication or cookies set with document.cookie
        //include withCredentials field
        xhrFields: {
            withCredentials: true
        },
        //set URL to your server you want to test
        url: "https://api.github.com",
        success: function(data) 
        {
            console.log("log response on success");
            console.log(data);
        }
    });
}