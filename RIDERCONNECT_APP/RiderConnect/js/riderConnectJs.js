
function FnClickLink(elementId)
{

    
    $("#aIdHome").removeClass('active');    
    $("#aIdContact").removeClass('active');
    $("#aIdAbout").removeClass('active');

   
    $("#"+elementId).addClass('active');


    if(elementId=="aIdHome")
    {
        $(".clscontactText").hide();
        $(".clsaboutText").hide();
        $(".clssubjectText").fadeIn(1000);

    }
    else if(elementId=="aIdContact")
    {
        $(".clssubjectText").hide();    
        
        $(".clsaboutText").hide();
        $(".clscontactText").show(1000)

    }

    else if(elementId=="aIdAbout")
    {
        $(".clssubjectText").hide();        
        $(".clscontactText").hide();
        $(".clsaboutText").show();

    }



}