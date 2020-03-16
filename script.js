return newFunction();

function newFunction() {
    $(Document).ready(function () { });
    {
        //E-mail Ajax Send
        $(form).submit(function () { });
        {
            //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: th.serialize()
            }).done(function () {
                alert("Спасибо,что выбрали Нас");
                setTimeout(function () {
                    //done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        }
        ;
    }
}
