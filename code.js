$(document).ready (function()
{
    $("a.nav-link").click(showTab);
    $("form").submit(placeOrder);

    function showTab() {
        // let user switch between tabs
        $(this).tab("show");
    }

    function placeOrder(event)
    {
        // stop the flashing form!
        event.preventDefault();

        // make a meat variable
        var meatsPrice = 0;
        var meatName = "";

        // ask jquery for all selected meat checkboxes
        var selectedMeat = $("input[name=meat]:checked");

        // get each box's data-price value
        selectedMeat.each(function () {
            // add to a meatsPrice variable
            meatsPrice += $(this).data("price");
            meatName += $(this).attr("id");
            meatName += "<br>";
        });

        // make a veggies variable

        var veggiesPrice = 0;
        var veggieName = "";
        var selectedVeggies = $("input[name=veggies]:checked");

        // get each box's data-price value
        selectedVeggies.each(function () {
            // add to a subtotal variable
            veggiesPrice += $(this).data("price");
            veggieName += $(this).attr("id");
            veggieName += "<br>";
        });

        // ask jquery for selected size button
        var selectedSize = $("input[name=size]:checked");
        var sizePrice = selectedSize.data("price");
        var sizeName = selectedSize.attr("id");

        // ask jquery for selected crust button
        var selectedCrust = $("input[name=crust]:checked");
        var crustName = selectedCrust.attr("id");

        // output sizeName, crustName, meatName, veggieName
        $("#sizeOutput").text(sizeName);
        $("#crustOutput").text(crustName);
        $("#meatOutput").html(meatName);
        $("#veggieOutput").html(veggieName);

        // add size + meats + veggies to get subTotal
        var subTotal = sizePrice + meatsPrice + veggiesPrice;

        // declare tax variable and combine with subTotal
        var taxSubtotal = 0.051 * subTotal;

        // declare deliveryFee variable
        var deliveryFee = 2;

        // combine taxSubtotal and deliveryFee to get grandTotal
        var grandTotal = subTotal + taxSubtotal + deliveryFee;

        // get value of Name, Address, Phone
        var customerName = $("#pizza-name").val();
        var customerAddress = $("#pizza-address").val();
        var customerPhone = $("#pizza-myPhone").val();

        // output value of Name, Address, Phone
        $("#nameOutput").text(customerName);
        $("#addressOutput").text(customerAddress);
        $("#myPhoneOutput").text(customerPhone);

        // output orderSubtotal
        $("#orderSubtotal").text("$" + subTotal.toFixed(2));

        // output tax
        $("#tax").text("$" + taxSubtotal.toFixed(2));

        // output grandTotal
        $("#grandTotalOutput").text("$" + grandTotal.toFixed(2));

    }
});