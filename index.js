<script type="text/javascript">
    function loadEvents() {
        var mailString;
        function updateMailString() {
            mailString = '&body=' + encodeURIComponent($('#msg').val());
            $('#mail').attr('href',  'mailto:siranjevgv2004@gmail.com' + mailString);
        }
        $( "#msg" ).focusout(function() { updateMailString(); });
        updateMailString();
    }
</script>