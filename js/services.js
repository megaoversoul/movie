movieApp.factory('Categories',[function(){
	var categories = {};
	categories.allCategories =[
		{url:"#", name: "Action"},
		{url:"#", name: "Adventure"},
		{url:"#", name: "Animation"},
		{url:"#", name: "Comedy"},
		{url:"#", name: "Crime"},
		{url:"#", name: "Documentary"},
		{url:"#", name: "Drama"},
		{url:"#", name: "Family"},
		{url:"#", name: "Fantasy"},
		{url:"#", name: "Foreign"},
		{url:"#", name: "History"},
		{url:"#", name: "Horror"},
		{url:"#", name: "Music"},
		{url:"#", name: "Mystery"},
		{url:"#", name: "Romance"},
		{url:"#", name: "Science Fiction"},
		{url:"#", name: "TV movie"},
		{url:"#", name: "Thriller"},
		{url:"#", name: "War"},
		{url:"#", name: "Western"}
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