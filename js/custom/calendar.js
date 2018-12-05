(function ($) {
    const monthsFuture = 3;
    $(document).ready(function() {
        moment.locale('nl');
        var eMoment = moment(); 
        setMonth(eMoment);
        var currentMonth = eMoment.month();
        var currentYear = eMoment.year();

        $('.js-prev-month').click(function(){
            if(currentMonth == eMoment.month()){
                return;
            }
            
            setMonth(eMoment.add(-1, 'month'));
        });

        $('.js-next-month').click(function(){
            let tempMonth = currentMonth; 
            if(currentMonth + monthsFuture > 11){
                tempMonth = currentMonth  - 12;
            }

            if((tempMonth + monthsFuture) == eMoment.month()){
                return;
            }
            setMonth(eMoment.add(1, 'month'));
        });

        var html = ''
        for(let i = 0; i < 7; i++){
            html = html + '<div class="pull-left" style="width: 14.2%;text-align: center; padding: 0 10px;"><div>' + eMoment.add(1, 'day').format('dd') + '</div><div>19</div></div>'; 
        }
        $('.js-short-days').html(html);
        /*
        var event = {
            'summary': 'Dit is de summary',
            'location': 'Dit is de location',
            'description': 'Dit is de description',
            'start': {
                'dateTime': '2018-12-6T09:00:00+01:00'
                },
            'end': {
                'dateTime': '2018-12-6T12:00:00+01:00'
                },
            'attendees': [
                {'email': 'ozer_unal@msn.com'},
            ],
        };

        $.ajax({
            url: '/SendData',
            // dataType: "jsonp",
            data: event,
            type: 'POST',
            jsonpCallback: 'callback', // this is not relevant to the POST anymore
            success: function (data) {
                //var ret = jQuery.parseJSON(data);
                //$('#lblResponse').html(ret.msg);
                console.log('Success: ' + data);
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message);
                //$('#lblResponse').html('Error connecting to the server.');
            },
        });
        */
    });  
}(jQuery));

function setMonth(momentDate){
    $('.js-month').text(momentDate.format('MMMM YYYY'));
}
