// ********Dərslərin qeydiyyatı *********

var app=angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {

    $scope.order_name='';
    
    $scope.order_status_list={
        name : false,
        surname : false
    };

    $scope.order_status=false;

    var local_storage=window.localStorage;

    var data=JSON.stringify([
    ]);

    if (!local_storage.getItem('user_list')) {
        local_storage.setItem('user_list', data);
    }


    var user_list=local_storage.getItem('user_list');

    
    $scope.user_list=JSON.parse(user_list);


    $scope.name='';
    $scope.surname='';

    $scope.addUser=function(){

        if ( 
            typeof($scope.lesson_name)!='undefined' && $scope.lesson_name.trim().length >= 3 && 
            typeof($scope.new_name)!='undefined' && $scope.new_name.trim().length >= 3 && 
            typeof($scope.new_surname) !='undefined' && $scope.new_surname.trim().length >= 3 ) 
        {

            $scope.user_list.push({
                lesson_code:$scope.lesson_code,
                lesson_name:$scope.lesson_name,
                lesson_class:$scope.lesson_class,
                name : $scope.new_name,
                surname : $scope.new_surname,
                edit : false
            });


            var old_data=JSON.parse(local_storage.getItem('user_list'));

            old_data.push({
                lesson_code : $scope.lesson_code,
                lesson_name : $scope.lesson_name,
                lesson_class:$scope.lesson_class,
                name : $scope.new_name,
                surname : $scope.new_surname,
                edit : false
            });



            local_storage.setItem('user_list', JSON.stringify(old_data));
            $scope.lesson_class='',
            $scope.lesson_code='';
            $scope.lesson_name='';
            $scope.new_name='';
            $scope.new_surname='';

        }else{
            alert('Xanalaran hec biri bos ola bilmez');
        }

    };

    $scope.removeUser=function(key){

        var ask=confirm('"'+ $scope.user_list[key].name+'" adlı istifadəçini silək?' );

        if (ask) {
            $scope.user_list.splice(key, 1);

            var old_data=JSON.parse(local_storage.getItem('user_list'));

            old_data.splice(key, 1);

            local_storage.setItem('user_list', JSON.stringify(old_data));
        }

    };

    $scope.updateUser=function(key){

        for(key2 in $scope.user_list){

            if (key2==key) {continue;}

            $scope.user_list[key2].edit=false;

        }

        $scope.user_list[key].edit=!$scope.user_list[key].edit;

        if (!$scope.user_list[key].edit) {
            //save local storage

            console.log( $scope.name) ;

            var old_data=JSON.parse(local_storage.getItem('user_list'));
            old_data[key].lesson_code=$scope.user_list[key].lesson_code;
            old_data[key].lesson_name=$scope.user_list[key].lesson_name;
            old_data[key].lesson_class=$scope.user_list[key].lesson_class;
            old_data[key].name=$scope.user_list[key].name;
            old_data[key].surname=$scope.user_list[key].surname;


            local_storage.setItem('user_list', JSON.stringify(old_data));
        }

    };

    $scope.orderBy=function(key){
        $scope.order_name=key;

        $scope.order_status_list[key]=!$scope.order_status_list[key];


        $scope.order_status=$scope.order_status_list[key];
    };


    $scope.column_name='name';

    $scope.filter_object={ [$scope.column_name] : $scope.search_text };

    $scope.searchUser=function(){

        $scope.filter_object={ [$scope.column_name] : $scope.search_text };
    }


});











// ******** Şagirdlərin qeydiyyati ************ 


		
		var app=angular.module('myAppSecond', []);

		app.controller('myCtrl2', function ($scope) {

			$scope.order_name_student='';
			
			$scope.order_student_list={
				name : false,
				surname : false
			};

			$scope.order_student_status=false;

			var localStorage=window.localStorage;

			var data=JSON.stringify([
			]);

			if (!localStorage.getItem('student_list')) {
				localStorage.setItem('student_list', data);
			}


			var student_list=localStorage.getItem('student_list');

			
			$scope.student_list=JSON.parse(student_list);


			$scope.name='';
			$scope.surname='';

			$scope.addStudent=function(){

				if ( 
					typeof($scope.new_name)!='undefined' && $scope.new_name.trim().length >= 3 && 
					typeof($scope.new_surname) !='undefined' && $scope.new_surname.trim().length >= 3 ) 
				{

					$scope.student_list.push({
						lesson_code:$scope.lesson_code,
						lesson_class:$scope.lesson_class,
						name : $scope.new_name,
						surname : $scope.new_surname,
						edit : false
					});


					var old_student_data=JSON.parse(localStorage.getItem('student_list'));

					old_student_data.push({
						lesson_code : $scope.lesson_code,
						lesson_class:$scope.lesson_class,
						name : $scope.new_name,
						surname : $scope.new_surname,
						edit : false
					});


					localStorage.setItem('student_list', JSON.stringify(old_student_data));
                    $scope.lesson_code='';
					$scope.new_name='';
					$scope.new_surname='';
					$scope.lesson_class=''

				}else{
					alert('Xanalaran hec biri bos ola bilmez');
				}

			};

			$scope.removeUser=function(key){

				var ask=confirm('"'+ $scope.student_list[key].name+'" adlı istifadəçini silək?' );

				if (ask) {
					$scope.student_list.splice(key, 1);

					var old_student_data=JSON.parse(localStorage.getItem('student_list'));

					old_student_data.splice(key, 1);

					localStorage.setItem('student_list', JSON.stringify(old_student_data));
				}

			};

			$scope.updateUser=function(key){

				for(key2 in $scope.student_list){

					if (key2==key) {continue;}

					$scope.student_list[key2].edit=false;

				}

				$scope.student_list[key].edit=!$scope.student_list[key].edit;

				if (!$scope.student_list[key].edit) {
					//save local storage

					console.log( $scope.name) ;

					var old_student_data=JSON.parse(localStorage.getItem('student_list'));
                    old_student_data[key].lesson_code=$scope.student_list[key].lesson_code;
					old_student_data[key].name=$scope.student_list[key].name;
					old_student_data[key].surname=$scope.student_list[key].surname;
					old_student_data[key].lesson_class=$scope.student_list[key].lesson_class;


					localStorage.setItem('student_list', JSON.stringify(old_student_data));
				}

			};

			$scope.orderBy=function(key){
				$scope.order_name_student=key;

				$scope.order_student_list[key]=!$scope.order_student_list[key];


				$scope.order_student_status=$scope.order_student_list[key];
			};


			$scope.column_name='name';

			$scope.filter_object={ [$scope.column_name] : $scope.search_text };

			$scope.searchUser=function(){

				$scope.filter_object={ [$scope.column_name] : $scope.search_text };
			}


		});




        // ********** Exam Section ************



        	
		var app=angular.module('myAppExam', []);

		app.controller('myCtrl3', function ($scope) {

			$scope.order_exam='';
			
			$scope.order_exam_list={
				name : false,
				surname : false
			};

			$scope.order_exam_status=false;

			var local_Storage=window.localStorage;

			var data=JSON.stringify([
			]);

			if (!local_Storage.getItem('exam_list')) {
				local_Storage.setItem('exam_list', data);
			}


			var exam_list=local_Storage.getItem('exam_list');

			
			$scope.exam_list=JSON.parse(exam_list);


			$scope.name='';
			$scope.surname='';

			$scope.addExam=function(){

				if ( 
					typeof($scope.lesson_date)!='undefined'||
					typeof($scope.new_surname) !='undefined' ) 
				{

					$scope.exam_list.push({
						lesson_code:$scope.lesson_code,
						student_code:$scope.student_code,
						lesson_date : $scope.lesson_date,
						price : $scope.price,
						edit : false
					});


					var old_data=JSON.parse(local_Storage.getItem('exam_list'));

					old_data.push({
						lesson_code : $scope.lesson_code,
						student_code : $scope.student_code,
						lesson_date : $scope.lesson_date,
						price : $scope.price,
						edit : false
					});



					local_Storage.setItem('exam_list', JSON.stringify(old_data));
                    $scope.lesson_code='';
					$scope.student_code='';
					$scope.lesson_date='';
					$scope.price='';

				}else{
					alert('Xanalaran heç biri boş ola bilmez');
				}

			};

			$scope.removeExam=function(key){

				var ask=confirm('"'+ $scope.exam_list[key].student_code+'"  istifadəçini silək?' );

				if (ask) {
					$scope.exam_list.splice(key, 1);

					var old_data=JSON.parse(local_Storage.getItem('exam_list'));

					old_data.splice(key, 1);

					local_Storage.setItem('exam_list', JSON.stringify(old_data));
				}

			};

			$scope.updateExam=function(key){

				for(key2 in $scope.exam_list){

					if (key2==key) {continue;}

					$scope.exam_list[key2].edit=false;

				}

				$scope.exam_list[key].edit=!$scope.exam_list[key].edit;

				if (!$scope.exam_list[key].edit) {
					//save local storage

					console.log( $scope.name) ;

					var old_data=JSON.parse(local_Storage.getItem('exam_list'));
                    old_data[key].lesson_code=$scope.exam_list[key].lesson_code;
					old_data[key].student_code=$scope.exam_list[key].student_code;
					old_data[key].lesson_date=$scope.exam_list[key].lesson_date;
					old_data[key].price=$scope.exam_list[key].price;


					local_Storage.setItem('exam_list', JSON.stringify(old_data));
				}

			};

			$scope.orderBy=function(key){
				$scope.order_exam=key;

				$scope.order_exam_list[key]=!$scope.order_exam_list[key];


				$scope.order_exam_status=$scope.order_exam_list[key];
			};


			$scope.column_name='name';

			$scope.filter_object={ [$scope.column_name] : $scope.search_text };

			$scope.searchUser=function(){

				$scope.filter_object={ [$scope.column_name] : $scope.search_text };
			}


		});

