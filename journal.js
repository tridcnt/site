$('document').ready(function() {
   $.getJSON('journal.json', function(json) {
      $.each(json, function (i, log) {
         $('body').append(`
            <article>
               <h2>${log.title}</h2>
               <h3>${log.date}</h3>
               <p>${log.text}</p>
            </article>
         `);
      });
   });
});