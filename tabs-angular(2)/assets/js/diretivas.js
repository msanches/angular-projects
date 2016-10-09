/* Diretivas Module */

app.directive("testando", function(){
  return{
      template:
        "<ul class='programacao'>"+
        "<li ng-show='dt.inicio.length' class='w3-left datahora'>{{dt.inicio}}<br>{{dt.termino}} </li>"+
        "<li class='titulo'>{{dt.titulo}}</li>"+
        "<li class='w3-right'><i class='fa fa-chevron-circle-right'></i></li>"+
        "</ul>"
  };
});

app.directive("testando2", function(){
  return{
      template:
      "<div class='w3-row'>"+
      "<div class='datahora w3-col s2 w3-center'>{{dt.inicio}} <br> {{dt.termino}}</div>"+
      "<div class='titulo w3-col s9'>{{dt.titulo}}</div>"+
      "<div class='w3-right'><i class='fa fa-chevron-circle-right w3-text-grey' style='margin-top:30px'></i></div>"+
      "</div>"
  };
});

app.directive("pai", function(){
  return{
      template:
        "<a href=#/categorias/{{dt.id}}>"+
        "<span ng-show='dt.inicio.length'  class='datahora'>{{dt.inicio}} - {{dt.termino}}</span> <br>"+
        "<span test='titulo'>{{dt.titulo}}</span>"+
        "<span class='w3-right '><i class='fa fa-chevron-circle-right'></i></span></a>"
  };
});

app.directive("artigo", function(){
  return{
      template:
      "<a href=#/artigo/{{dt.id}}>"+
      "<span class='datahora'>{{dt.inicio}} - {{dt.termino}} <span ng-show='dt.local.length > 1'> - {{dt.local}}</span> </span><br>"+
      "<span id='titulo'>{{dt.titulo}}</span><br>"+
      "<span id='titulo' class='w3-text-blue'>{{dt.autores}}</span></a>"
  };
});

app.directive("artigobusca", function(){
  return{
      template:
      "<a href=#/artigo/{{dt.id}}>"+
      "<span class='datahora'>{{dt.strdata}}</span><br>"+
      "<span class='datahora'>{{dt.inicio}} - {{dt.termino}} <span ng-show='dt.local.length > 1'> - {{dt.local}}</span> </span><br>"+
      "<span id='titulo'>{{dt.titulo}}</span><br>"+
      "<span id='titulo' class='w3-text-blue'>{{dt.autores}}</span></a>"
  };
});

/* Diretiva para o botão voltar
app.directive('backBotao', function () {
    return {
        restrict: 'E',
        template: '<i class="fa fa-chevron-left"></i>',
        scope: {
            back: '@back',
            icons: '@icons'
        },
        link: function(scope, element, attrs) {
            $(element[0]).on('click', function() {
                history.back();
                scope.$apply();
            });
        }
    };
});
 **********/
