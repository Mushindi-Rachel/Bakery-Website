document.addEventListener("DOMContentLoaded", function() {
    // Hide all content initially
    document.querySelectorAll('.content').forEach(function(content){
        content.style.display = 'none';
    });

    // Function to show content
    function showContent(contentId) {
        console.log(`Displaying ${contentId}`);
        document.querySelectorAll('.content').forEach(function(content){
            content.style.display = 'none';
        });

        document.getElementById(contentId).style.display = 'block';

        // Corrected syntax for recursive call
        setTimeout(function() {
            showContent(
                contentId === 'content1' ? 'content2' :
                contentId === 'content2' ? 'content3' :
                contentId === 'content3' ? 'content4' : 'content1'
            );
        }, 5000); // Change 5000 to the desired time in milliseconds
    }

    // Start the process
    showContent('content1');
});


function performSearch(){
    var query = document.getElementById('searchInput').value.toLowerCase();
    var products = document.querySelectorAll('#products p');

    products.forEach(function(product){
        var productName = product.textContent.toLowerCase();
        var displayStyle = productName.includes(query)? 'block':'none';
        product.style.display = displayStyle;
    });
}