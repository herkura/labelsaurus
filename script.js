
function print(){
    // get the details from the form
    var description = document.getElementById("Description").value;
    var code_num = document.getElementById("Code_num").value;
    var qty = document.getElementById("qty").value;
    var cases = document.getElementById("cases").value;
    var invoice = document.getElementById("invoice").value;
    var size = document.getElementById("size").value;
    var date = document.getElementById("date").value;
    
    // desgning the page
    var output = "<html><head><title>Label</title><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'/></head>"
    output +=  "<body><header><h1 class='text-center font-monospace'>PIPLANI ENTERPRISES</h1><p class='text-center' style='font-size:15px'>(AN ISO 9001:2000 Co.)<br>PLOT NO. 16-17, GALI NO. 3 EAST, SARURPUR IND. AREA<br>SOHNA ROAD, FARIDABAD-121005</p></header>";
    output += "<div class='container'><div class='row'><div class='col-12 col-lg-6'><p>DESCRIPTION: " + description + "</p>";
    output += "<p>CODE NUMBER: " + code_num + "</p>";
    output += "<p>QUANTITY: " + qty + "</p>";
    output += "<p>NO. OF CASES: " + cases + "</p>";
    output += "<p>INVOICE NO: " + invoice + "</p></div>";
    output += "<div class='col-12 col-lg-6'><p>LOT SIZE: " + size + "</p>";
    output += "<p>DATE: " + date + "</p></div>";
    output += "</div></div></body></html>";

    var printWindow = window.open('', 'PrintWindow');
    for(var i=0;i<cases;i++){
        printWindow.document.write(output);
    }
    printWindow.document.close();
    printWindow.print();
}



