
function print(){
    // get the details from the form
    var description = document.getElementById("Description").value;
    var code_num = document.getElementById("Code_num").value;
    var qty = document.getElementById("qty").value;
    var cases = document.getElementById("cases").value;
    var invoice = document.getElementById("invoice").value;
    var size = document.getElementById("size").value;
    var date = document.getElementById("date").value;
    
    var printWindow = window.open('', 'Label');
    // desgning the page
    var labelstyle = `
    .text-center{
        text-align: center;
    }
    .font-heading{
        font-family: sans-serif;
        font-weight: normal;
    }
    .font-subheading{
        font-family: sans-serif;
        font-weight: normal;
        font-size: 12px;
        top:5px;
        bottom: 20px;
    }
    .col{
        column-count: 2;
        column-gap: 10px;
        column-span: all;
    }
    p{
        font-family: sans-serif;
        font-weight: normal;
    }
    `;
    var output = printWindow.document.head.innerHTML = `<style>${labelstyle}</style>`;
    var labelstructure = `
    <h1 class = "text-center font-heading">PIPLANI ENTERPRISES</h1>
    <p class = "text-center font-subheading">(AN ISO 9001:2000 Co.)<br>PLOT NO. 16-17, GALI NO. 3 EAST, SARURPUR IND. AREA<br>SOHNA ROAD, FARIDABAD-121005</p>
    <div class="col">
        <p><label for="desc">DESCRIPTION:</label></p>
        <textarea name="desc" id="desc"  rows="5" cols="40">${description}</textarea>
        <p>CODE NUMBER:${code_num}</p>
        <p>QUANTITY: ${qty}</p>
        <p>NO. OF CASES:${cases}</p>
        <p>INVOICE NO:${invoice}</p>
        <p>LOT SIZE:${size}</p>
        <p>DATE:${date}</p>
    </div>
`;

    output+= printWindow.document.body.innerHTML = labelstructure;
    for(var i=0;i<cases;i++){
        printWindow.document.write(output);
    }
    printWindow.document.close();
    printWindow.print();
}



