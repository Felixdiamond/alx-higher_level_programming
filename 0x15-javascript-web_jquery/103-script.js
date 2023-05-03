$(document).ready(function () {
  $('#btn_translate').click(function () {
    const langCode = $('#language_code').val();
    const apiUrl = 'https://fourtonfish.com/hellosalut/?lang=' + langCode;
    $.get(apiUrl, function (data) {
      $('#hello').text(data.hello);
    });
  });

  $('#language_code').on('keypress', function (e) {
    if (e.which === 13) {
      $('#btn_translate').click();
    }
  });
});
