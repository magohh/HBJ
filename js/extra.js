$(document).ready(function(){
    $('#modal').modal();
    $('#modal').modal('open'); 
 });


function q1() {
            div = document.getElementById('q2');
            div.style.display = 'block';
        }
        function co() {
            div = document.getElementById('qu');
            div.style.color = '#000';
        }
        function co1() {
            div = document.getElementById('qu1');
            div.style.color = '#000';
        }
        function co2() {
            div = document.getElementById('qu2');
            div.style.color = '#000';
        }
        function co3() {
            div = document.getElementById('qu3');
            div.style.color = '#000';
        }
        function co4() {
            div = document.getElementById('qu4');
            div.style.color = '#000';
        }
        function q2() {
            div = document.getElementById('q3');
            div.style.display = 'block';
        }
        function q3() {
            div = document.getElementById('q4');
            div.style.display = 'block';
        }
        function q4() {
            div = document.getElementById('q5');
            div.style.display = 'block';
        }
        function q5() {
            div = document.getElementById('q6');
            div.style.display = 'block';
        }
        function err() {
            div = document.getElementById('err');
            div.style.display = 'block';

        }
    function cambiar_fondo() {
                obj = document.getElementById('err-b');
                obj.style.backgroundColor = (obj.style.backgroundColor == '#000') ? 'none' : '#000';
            }