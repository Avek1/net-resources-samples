acme.services.opportunity = acme.services.opportunity || {};

// Create Form - GET by ID
acme.services.opportunity.getById = function (id, onSuccess, onError) {
	var url = "/api/opportunities/" + id;
	var settings = {
		cache: false
		, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
		, dataType: "json"
		, success: onSuccess
		, error: onError
		, type: "GET"
	};
	$.ajax(url, settings);
}

// Create Form - POST 
acme.services.opportunity.post = function (data, onSuccess, onError) {
	var url = "/api/opportunities/";
	var settings = {
		cache: false
		, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
		, data: data
		, dataType: "json"
		, success: onSuccess
		, error: onError
		, type: "POST"
	};
	$.ajax(url, settings);
}

// Create Form - PUT - update entry
acme.services.opportunity.put = function (id, data, onSuccess, onError) {
	var url = "/api/opportunities/" + id;
	var settings = {
		cache: false
		, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
		, data: data
		, dataType: "json"
		, type: "PUT"
		, success: onSuccess
		, error: onError
	};
	$.ajax(url, settings);
}

// Create Form - DELETE 
acme.services.opportunity.delete = function (id, onSuccess, onError) {
	//
	var url = "/api/opportunities/" + id
	var settings = {
		cache: false
		, dataType: "json"
		, success: onSuccess
		, error: onError
		, type: "DELETE"
	};
	$.ajax(url, settings);
}

// Create Form - GOOGLE MAP -  GET LatLng
acme.services.opportunity.getLatLng = function (address, onSuccess, onError) {
	var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
		address + "&key=AIzaSyAEXjYvK3d8Dasdyz2HN3gy81FJk6XvlYI";
	var settings = {
		cache: false
		, dataType: "json"
		, success: onSuccess
		, error: onError
		, type: "GET"
	};
	$.ajax(url, settings);
};

// Index - PUT    
acme.services.opportunity.putJson = function (id, opportunity, onSuccess, onError) {
	var url = "/api/opportunities/" + id;
	var settings = {
		cache: false
		, contentType: "application/json; charset=UTF-8"
		, data: JSON.stringify(opportunity)
		, dataType: "json"
		, success: onSuccess
		, error: onError
		, type: "PUT"
	}
	$.ajax(url, settings);
}

// Index - POST
acme.services.opportunity.postJson = function (opportunity, onSuccess, onError) {
	var url = "/api/opportunities/";
	var settings = {
		cache: false
		, contentType: "application/json; charset=UTF-8"
		, data: JSON.stringify(opportunity)
		, dataType: "json"
		, success: onSuccess
		, error: onError
		, type: "POST"
	}
	$.ajax(url, settings);
}

// Index - DELETE
acme.services.opportunity.deleteJson = function (id, onSuccess, onError) {
	var url = "/api/opportunities/" + id;
	var settings = {
		cache: false
		, success: onSuccess
		, error: onError
		, type: "DELETE"
		
	}
	$.ajax(url, settings);
}

// Index - SEARCH 
acme.services.opportunity.search = function (searchString, 
	itemsPerPage, currentPage, beginDate, endDate, sortByColumn, descending, 
	onSearchSuccess, onSearchError) {
	var url = "/api/opportunities/search?searchstring=" + searchString
		+ "&itemsPerPage=" + itemsPerPage
		+ "&currentPage=" + currentPage
		+ "&beginDate=" + beginDate
		+ "&endDate=" + endDate
		+ "&sortByColumn=" + sortByColumn
		+ "&descending=" + descending;
	var settings = {
		cache: false
		, contentType: "application/json; charset=UTF-8"
		, dataType: "JSON"
		, success: onSearchSuccess
		, error: onSearchError
		, type: "GET"
	}
	$.ajax(url, settings);
}