movieApp.factory('Categories',[function(){
	var categories = {};
	categories.allCategories =[
		{url:"#/error.html", name: "Action"},
		{url:"#/error.html", name: "Adventure"},
		{url:"#/error.html", name: "Animation"},
		{url:"#/error.html", name: "Comedy"},
		{url:"#/error.html", name: "Crime"},
		{url:"#/error.html", name: "Documentary"},
		{url:"#/error.html", name: "Drama"},
		{url:"#/error.html", name: "Family"},
		{url:"#/error.html", name: "Fantasy"},
		{url:"#/error.html", name: "Foreign"},
		{url:"#/error.html", name: "History"},
		{url:"#/error.html", name: "Horror"},
		{url:"#/error.html", name: "Music"},
		{url:"#/error.html", name: "Mystery"},
		{url:"#/error.html", name: "Romance"},
		{url:"#/error.html", name: "Science Fiction"},
		{url:"#/error.html", name: "TV movie"},
		{url:"#/error.html", name: "Thriller"},
		{url:"#/error.html", name: "War"},
		{url:"#/error.html", name: "Western"}
	];
	return categories;
}]);

movieApp.factory('Api',['$resource', function($resource){
	return {
		MDB: $resource('http://api.themoviedb.org/3/search/:type/:query',{query:'@query', api_key: "37a32d493192c01a8a1a823228f73e2d"},
			{
				searchMovie: {
					method: "GET",
					params: {
						query: '@query', 
						api_key: "37a32d493192c01a8a1a823228f73e2d"
					},
					url: "http://api.themoviedb.org/3/search/movie"
				},
				searchPerson: {
					method: "GET",
					params: {
						query: '@query',
						api_key: "37a32d493192c01a8a1a823228f73e2d"
					},
					url: "http://api.themoviedb.org/3/search/person"
				}
			})
	};
}]);