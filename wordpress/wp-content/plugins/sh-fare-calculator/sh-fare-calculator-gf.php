<?php
/**
 * Plugin Name: Gravity Forms Fare Calculator
 * Plugin URI: https://wpgurus.org
 * Description: This plugin adds special fields for calculating fare between two places based on Distance.
 * Version: 2.0
 * Author: Wordpress Gurus
 * Author URI: https://wpgurus.org
 * License: Commercial
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class sh_gf_fare_calculator{
	
	function __construct(){
		//Add navigation setting for api key
		add_filter( 'gform_addon_navigation', array($this,'sh_fc_menu_item') );
		
		//Backend Tasks
		add_action( 'gform_field_standard_settings', array($this,'sh_gf_standard_settings'), 10, 2 );
		add_action( 'gform_editor_js', array($this,'editor_script') );
		
		add_filter( 'gform_form_settings', array($this,'sh_custom_form_setting'),10,2 );
		add_filter( 'gform_pre_form_settings_save', array($this, 'sh_save_custom_form_setting') );
		
		//Frontend Tasks
		add_filter('gform_pre_render', array($this,'sh_populate_fareform'));

		add_action( 'gform_pre_submission', array($this, 'pre_submission_handler') );
		
		
	}
	function pre_submission_handler( $form ) {
		//print_r($_POST);
	}
	function sh_fc_menu_item($menu_items){
		$menu_items[] = array(
				"name" => "sh_fc_settings",
				"label" => "Fare Calculator Settings",
				"callback" => array($this,"sh_fc_set_fields"),
				"permission" => "manage_options" );
		return $menu_items;
	}
	
	function sh_fc_set_fields(){
		?>
			<div class="wrap">
				<h3>Fare Calculator Settings</h3>
				<hr />
				<?php
				if(!empty($_POST)){
					foreach($_POST as $k=>$v){
						update_option( $k , $v );
					}
				}
				$sh_fc_google_api_key	=	get_option('sh_fc_google_api_key');
				echo $sh_fc_google_api_key;
				?>
				<div id="tab_settings" >
					<form method="post">
					<table class="form-table">
						<tbody>		
							<tr valign="top">
								<th><label>Google Places API Key</label></th>
								<td><input type="text" name="sh_fc_google_api_key" value="<?php echo empty($sh_fc_google_api_key)?'':$sh_fc_google_api_key; ?>"></td>
							</tr>
							<tr valign="top">
								<th>&nbsp;</th>
								<td><input class="button button-large button-primary" type="submit" name="submit" value="Save"></td>
							</tr>
						</tbody>
					</table>
					</form>
				</div>
			</div>
			<?php		
		}
	function sh_custom_form_setting( $settings, $form ) {	
		$countries = array('AF' => 'Afghanistan','AX' => 'Aland Islands','AL' => 'Albania','DZ' => 'Algeria','AS' => 'American Samoa',	'AD' => 'Andorra',
							'AO' => 'Angola','AI' => 'Anguilla','AQ' => 'Antarctica',	'AG' => 'Antigua And Barbuda',	'AR' => 'Argentina','AM' => 'Armenia',
							'AW' => 'Aruba','AU' => 'Australia',	'AT' => 'Austria',			'AZ' => 'Azerbaijan',
							'BS' => 'Bahamas',			'BH' => 'Bahrain',				'BD' => 'Bangladesh',				'BB' => 'Barbados',
							'BY' => 'Belarus','BE' => 'Belgium','BZ' => 'Belize','BJ' => 'Benin','BM' => 'Bermuda','BT' => 'Bhutan','BO' => 'Bolivia','BA' => 'Bosnia And Herzegovina','BW' => 'Botswana',
							'BV' => 'Bouvet Island','BR' => 'Brazil','IO' => 'British Indian Ocean Territory','BN' => 'Brunei Darussalam','BG' => 'Bulgaria','BF' => 'Burkina Faso','BI' => 'Burundi',
							'KH' => 'Cambodia','CM' => 'Cameroon','CA' => 'Canada','CV' => 'Cape Verde','KY' => 'Cayman Islands','CF' => 'Central African Republic','TD' => 'Chad','CL' => 'Chile',
							'CN' => 'China','CX' => 'Christmas Island','CC' => 'Cocos (Keeling) Islands','CO' => 'Colombia','KM' => 'Comoros','CG' => 'Congo','CD' => 'Congo, Democratic Republic',
							'CK' => 'Cook Islands','CR' => 'Costa Rica','CI' => 'Cote D\'Ivoire','HR' => 'Croatia','CU' => 'Cuba','CY' => 'Cyprus','CZ' => 'Czech Republic','DK' => 'Denmark',
							'DJ' => 'Djibouti','DM' => 'Dominica','DO' => 'Dominican Republic','EC' => 'Ecuador','EG' => 'Egypt','SV' => 'El Salvador','GQ' => 'Equatorial Guinea','ER' => 'Eritrea',
							'EE' => 'Estonia','ET' => 'Ethiopia','FK' => 'Falkland Islands (Malvinas)','FO' => 'Faroe Islands','FJ' => 'Fiji','FI' => 'Finland','FR' => 'France','GF' => 'French Guiana','PF' => 'French Polynesia',
							'TF' => 'French Southern Territories','GA' => 'Gabon','GM' => 'Gambia','GE' => 'Georgia','DE' => 'Germany','GH' => 'Ghana','GI' => 'Gibraltar','GR' => 'Greece','GL' => 'Greenland','GD' => 'Grenada',
							'GP' => 'Guadeloupe','GU' => 'Guam','GT' => 'Guatemala','GG' => 'Guernsey','GN' => 'Guinea','GW' => 'Guinea-Bissau','GY' => 'Guyana','HT' => 'Haiti','HM' => 'Heard Island & Mcdonald Islands',
							'VA' => 'Holy See (Vatican City State)','HN' => 'Honduras','HK' => 'Hong Kong','HU' => 'Hungary','IS' => 'Iceland','IN' => 'India','ID' => 'Indonesia','IR' => 'Iran, Islamic Republic Of','IQ' => 'Iraq',
							'IE' => 'Ireland','IM' => 'Isle Of Man','IL' => 'Israel','IT' => 'Italy','JM' => 'Jamaica','JP' => 'Japan','JE' => 'Jersey','JO' => 'Jordan','KZ' => 'Kazakhstan','KE' => 'Kenya','KI' => 'Kiribati','KR' => 'Korea',
							'KW' => 'Kuwait','KG' => 'Kyrgyzstan','LA' => 'Lao People\'s Democratic Republic','LV' => 'Latvia','LB' => 'Lebanon','LS' => 'Lesotho','LR' => 'Liberia','LY' => 'Libyan Arab Jamahiriya','LI' => 'Liechtenstein',
							'LT' => 'Lithuania','LU' => 'Luxembourg','MO' => 'Macao','MK' => 'Macedonia','MG' => 'Madagascar','MW' => 'Malawi','MY' => 'Malaysia','MV' => 'Maldives','ML' => 'Mali','MT' => 'Malta','MH' => 'Marshall Islands',
							'MQ' => 'Martinique','MR' => 'Mauritania','MU' => 'Mauritius','YT' => 'Mayotte','MX' => 'Mexico','FM' => 'Micronesia, Federated States Of','MD' => 'Moldova','MC' => 'Monaco','MN' => 'Mongolia','ME' => 'Montenegro',
							'MS' => 'Montserrat','MA' => 'Morocco','MZ' => 'Mozambique','MM' => 'Myanmar','NA' => 'Namibia','NR' => 'Nauru','NP' => 'Nepal','NL' => 'Netherlands','AN' => 'Netherlands Antilles',
							'NC' => 'New Caledonia','NZ' => 'New Zealand','NI' => 'Nicaragua','NE' => 'Niger','NG' => 'Nigeria','NU' => 'Niue','NF' => 'Norfolk Island','MP' => 'Northern Mariana Islands','NO' => 'Norway',
							'OM' => 'Oman','PK' => 'Pakistan','PW' => 'Palau','PS' => 'Palestinian Territory, Occupied','PA' => 'Panama','PG' => 'Papua New Guinea','PY' => 'Paraguay','PE' => 'Peru',
							'PH' => 'Philippines','PN' => 'Pitcairn','PL' => 'Poland','PT' => 'Portugal','PR' => 'Puerto Rico','QA' => 'Qatar','RE' => 'Reunion','RO' => 'Romania','RU' => 'Russian Federation',
							'RW' => 'Rwanda','BL' => 'Saint Barthelemy','SH' => 'Saint Helena','KN' => 'Saint Kitts And Nevis','LC' => 'Saint Lucia','MF' => 'Saint Martin','PM' => 'Saint Pierre And Miquelon',
							'VC' => 'Saint Vincent And Grenadines','WS' => 'Samoa','SM' => 'San Marino','ST' => 'Sao Tome And Principe','SA' => 'Saudi Arabia','SN' => 'Senegal',
							'RS' => 'Serbia','SC' => 'Seychelles','SL' => 'Sierra Leone','SG' => 'Singapore','SK' => 'Slovakia','SI' => 'Slovenia','SB' => 'Solomon Islands','SO' => 'Somalia',
							'ZA' => 'South Africa','GS' => 'South Georgia And Sandwich Isl.','ES' => 'Spain','LK' => 'Sri Lanka','SD' => 'Sudan','SR' => 'Suriname','SJ' => 'Svalbard And Jan Mayen',
							'SZ' => 'Swaziland','SE' => 'Sweden','CH' => 'Switzerland','SY' => 'Syrian Arab Republic','TW' => 'Taiwan','TJ' => 'Tajikistan','TZ' => 'Tanzania','TH' => 'Thailand',
							'TL' => 'Timor-Leste','TG' => 'Togo','TK' => 'Tokelau','TO' => 'Tonga','TT' => 'Trinidad And Tobago','TN' => 'Tunisia','TR' => 'Turkey','TM' => 'Turkmenistan','TC' => 'Turks And Caicos Islands',
							'TV' => 'Tuvalu','UG' => 'Uganda','UA' => 'Ukraine','AE' => 'United Arab Emirates','GB' => 'United Kingdom','US' => 'United States','UM' => 'United States Outlying Islands',
							'UY' => 'Uruguay','UZ' => 'Uzbekistan','VU' => 'Vanuatu','VE' => 'Venezuela','VN' => 'Viet Nam','VG' => 'Virgin Islands, British','VI' => 'Virgin Islands, U.S.',
							'WF' => 'Wallis And Futuna','EH' => 'Western Sahara','YE' => 'Yemen','ZM' => 'Zambia','ZW' => 'Zimbabwe');	
		
		$countrydropdown	=	'<select name="sh_country">';
		foreach($countries as $c => $country){
			if($c==rgar($form, 'sh_country') ){
				$countrydropdown	.=	 '<option value="'.$c.'" selected>'.$country.'</option>';
			}
			else{
				$countrydropdown	.=	  '<option value="'.$c.'">'.$country.'</option>';
			}
		}
		$countrydropdown	.=	'</select>';
		if(rgar($form, 'sh_unit')=='MILE'){
			$unit	=	'';
			$unit	.=	'<input type="radio" value="KM" name="sh_unit" > KM ';
			$unit	.=	'<input type="radio" value="MILE" name="sh_unit" checked="checked" > Miles ';
		}
		else{
			$unit	=	'';
			$unit	.=	'<input type="radio" value="KM" name="sh_unit" checked="checked" > KM ';
			$unit	.=	'<input type="radio" value="MILE" name="sh_unit" > Miles ';
		}
		
		if(rgar($form, 'sh_farecalculator_enabled')!==''){
			$enabled	=	'';
			$enabled	.=	'<input type="radio" value="1" name="sh_farecalculator_enabled" checked="checked" > YES ';
			$enabled	.=	'<input type="radio" value="0" name="sh_farecalculator_enabled" > NO ';
		}
		else{
			$enabled	=	'';
			$enabled	.=	'<input type="radio" value="1" name="sh_farecalculator_enabled" > YES ';
			$enabled	.=	'<input type="radio" value="0" name="sh_farecalculator_enabled" checked="checked" > NO ';			
		}
		
		$settings['Form Button']['sh_custom_setting'] = '
        <tr>
			<th colspan="2"><h4 class="gf_settings_subgroup_title">Fare Calculator Settings</h4></th>		
		</tr>
		<tr>
            <th><label for="sh_farecalculator_enabled">Fare Calculator Enabled</label></th>
            <td>'.$enabled.'</td>
        </tr>
		<tr>
            <th><label for="sh_country">Country</label></th>
            <td>'.$countrydropdown.'</td>
        </tr>
        <tr>
            <th><label for="sh_unit">Unit</label></th>
            <td>'.$unit.'</td>
        </tr>
        <tr>
            <th><label for="sh_priceperkm">Price Per Km/Mile</label></th>
            <td><input value="' . rgar($form, 'sh_priceperkm') . '" name="sh_priceperkm"></td>
        </tr>
		<tr>
		<th><label for="sh_currency">Currency</label></th>
		<td><input value="' . rgar($form, 'sh_currency') . '" name="sh_currency"></td>
		</tr>';
		return $settings;
	}
	
	// save your custom form setting
	function sh_save_custom_form_setting($form) {
		$form['sh_farecalculator_enabled'] 	=	rgpost( 'sh_farecalculator_enabled' );
		$form['sh_country'] 	=	rgpost( 'sh_country' );
		$form['sh_priceperkm']	=	rgpost( 'sh_priceperkm' );
		$form['sh_currency'] 	=	rgpost( 'sh_currency' );
		$form['sh_unit'] 	=	rgpost( 'sh_unit' );
		return $form;
	}
	
	
	function sh_gf_standard_settings( $position, $form_id ) {
		//create settings on position 25 (right after Field Label)
		if ( $position == 25 ) {
			?>
		        <li class="fare_setting field_setting">
		            <label for="field_admin_label">
		                <?php _e( 'Fare Calculation Field', 'gravityforms' ); ?>
		                <?php gform_tooltip( 'form_field_fare_value' ) ?>
		            </label>
		            <select id="field_fare_value">
		            	<option value="0">--Select--</option>
		            	<option value="from">From Field</option>
		            	<option value="to">To Field</option>
		            	<option value="duration">Duration Field</option>
		            	<option value="via">Via Field</option>
		            </select> 
		        </li>
		        <li class="fare1_setting field_setting">
		            <label for="field_admin_label">
		                <?php _e( 'Fare Calculation Field', 'gravityforms' ); ?>
		                <?php gform_tooltip( 'form_field_fare_value' ) ?>
		            </label>
		            <select id="field_fare1_value">
		            	<option value="0">--Select--</option>
		            	<option value="distance">Distance Field</option>
		            	<option value="fare">Fare Field</option>
		            </select> 
		        </li>
		        <?php
		    }   
	}
	//Action to inject supporting script to the form editor page
	
	function editor_script(){
	?>
	  
    <script type='text/javascript'>
        //adding setting to fields of type "text"
        fieldSettings["text"] += ", .fare_setting";
        		
        //binding to the load field settings event to initialize the checkbox
        jQuery(document).bind("gform_load_field_settings", function(event, field, form){
            jQuery("#field_fare_value").attr("value", field.fare);
            jQuery("#field_fare1_value").attr("value", field.fare1);
        });
        
        jQuery('document').ready(function(){
			jQuery('#field_fare_value').on('change',function(){
	            SetFieldProperty("fare", jQuery(this).val());
			});
        });


      //adding setting to fields of type "text"
        fieldSettings["number"] += ", .fare1_setting";
        		
        //binding to the load field settings event to initialize the checkbox
        jQuery(document).bind("gform_load_field_settings", function(event, field, form){
            jQuery("#field_fare1_value").attr("value", field.fare);
        });
        
        jQuery('document').ready(function(){
			jQuery('#field_fare1_value').on('change',function(){
	            SetFieldProperty("fare1", jQuery(this).val());
			});
        });
    </script>
    <?php
	 
	}
	
	
	function sh_populate_fareform($form){
		if(!empty($form['sh_farecalculator_enabled'])){
			//Frontend end operations
			//add_action( 'wp_enqueue_scripts', array($this,'sh_include_google_places_api' ));
			
			add_action( 'wp_footer',array($this,'sh_google_address_autocomplete' ));
			
			$from_exists	=	false;
			$to_exists	=	false;
			$fare_exists	=	false;
			$distance_exists	=	false;
			
			echo '<input type="hidden" id="sh_farecalculator_enabled" name="sh_farecalculator_enabled" value="'.$form['sh_farecalculator_enabled'].'" />';
			echo '<input type="hidden" id="sh_country" name="sh_country" value="'.$form['sh_country'].'" />'; 
			echo '<input type="hidden" id="sh_priceperkm" name="sh_priceperkm" value="'.$form['sh_priceperkm'].'" />';
			echo '<input type="hidden" id="sh_currency" name="sh_currency" value="'.$form['sh_currency'].'" />';
			echo '<input type="hidden" id="sh_unit" name="sh_unit" value="'.$form['sh_unit'].'" />';
			echo '<input type="hidden" id="sh_formid" name="sh_formid" value="'.$form['id'].'" />';
			
			
			foreach($form['fields'] as &$field){
				if($field['type'] == 'text' && $field['fare']=='from' ){
					$field['cssClass']	=	'sh_fare_from';
					$from_exists	=	true;
				}
				if($field['type'] == 'text' && $field['fare']=='to' ){
					$field['cssClass']	=	'sh_fare_to';
					$to_exists	=	true;
				}
				if($field['type'] == 'text' && $field['fare']=='duration' ){
					$field['cssClass']	=	'sh_fare_duration';
				}
				if($field['type'] == 'text' && $field['fare']=='via' ){
					$field['cssClass']	=	'sh_fare_via';
				}
				
				if($field['type'] == 'number' && $field['fare1']=='fare' ){
					$field['cssClass']	=	'sh_fare_fare';
					$fare_exists	=	true;
				}
				if($field['type'] == 'number' && $field['fare1']=='distance' ){
					$field['cssClass']	=	'sh_fare_distance';
					$distance_exists	=	true;
				}
				
			}
			
			if(!$from_exists || !$to_exists || !$fare_exists || !$distance_exists){
				echo 'Misconfigured fare calculator. Please configure all four <em>mandatory</em> fields';
				die();
			}
		}
		return $form;
	}
	
	
	function sh_google_address_autocomplete() {
		
		$sh_fc_google_api_key	=	get_option('sh_fc_google_api_key');
		if(!empty($sh_fc_google_api_key)){
		?>
			<Script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=<?php echo $sh_fc_google_api_key; ?>&libraries=places"></Script>
		<?php 
		}
		else{
			?>
			<Script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></Script>
		<?php 
		}
		?>
		<link rel='stylesheet' id='dashicons-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' type='text/css' media='all' />
		<style>
		#dvMap {
	        height: 300px;
			width:500px;
			position:relative;
	      }
		html, body {
	        height: 100%;
	        margin: 0;
	        padding: 0;
	      }
		.fa-times{
			color:red;
			padding-left:.5em;
			font-size:1.5em;
			
		}
		</style>
		
		<script>
		
		function calcRoute(calculator,currency,priceperkm,unit,source,destination,directionsDisplay,directionsService,waypoints){
			
			if(waypoints==''){
				var request = {
			        origin: source,
			        destination: destination,
			        travelMode: google.maps.TravelMode.DRIVING
			    };
			}
			else{
				var request = {
			        origin: source,
			        destination: destination,
			        waypoints: waypoints,
			        travelMode: google.maps.TravelMode.DRIVING
			    };
			}    
		    directionsService.route(request, function (response, status) {
		        if (status == google.maps.DirectionsStatus.OK) {

			if(document.getElementById('dvMap')){	
				   		
			 }
				       
			        directionsDisplay.setDirections(response);
					
		        	var mybaseroute = response.routes[0];
					var basedistance	=	0;
					var duration	=	'';
					var distancelabel	=	'';
					
					if(mybaseroute.legs.length > 1){
						basedistance += parseInt(mybaseroute.legs[1].distance.value);
						duration	=	mybaseroute.legs[1].duration.text;
					}
					else{
						basedistance += parseInt(mybaseroute.legs[0].distance.value);
						duration 	=	mybaseroute.legs[0].duration.text;
					}
                    /*for (i = 0; i < mybaseroute.legs.length; i++) {
                    	basedistance += parseInt(mybaseroute.legs[i].distance.value);
                    }
                    */
					if(unit=='MILE'){
						basedistance = Math.round(parseInt(basedistance) / 1609);
						distancelabel	=	basedistance + ' Miles';
					}
					else{
						basedistance = Math.round((parseInt(basedistance) / 1609)/0.62137);
						distancelabel	=	basedistance + ' KMs'
					}
					var fare	=	parseFloat(basedistance * priceperkm) 
					//fare =	currency + ' '+ fare;
					//basedistance	=	'Fare is ' + basedistance + ' * '+ currency +' '+priceperkm+' = '+fare;
					//var resultOutput	=	$('.sh_fare_fare input').attr('id');
					//$('#'+resultOutput).val(basetotal);
					
					if(jQuery('.sh_fare_distance')){
						var distanceContainer	=	jQuery('.sh_fare_distance input').attr('id');
						jQuery('#'+distanceContainer).val(basedistance);
						jQuery('#'+distanceContainer).attr('readonly','readonly');
							
					}
					if(jQuery('.sh_fare_fare')){
						var fareContainer		=	jQuery('.sh_fare_fare input').attr('id');
						jQuery('#'+fareContainer).val(fare);
						jQuery('#'+fareContainer).attr('readonly','readonly');
					}
					if(jQuery('.sh_fare_duration')){
						var durationContainer		=	jQuery('.sh_fare_duration input').attr('id');
						jQuery('#'+durationContainer).val(duration);
						jQuery('#'+durationContainer).attr('readonly','readonly');
					}
		        }
		        else{
					console.log('error!');
			    }
		    });	
		}
			
		jQuery(document).ready(function($) {
			var country	=	$('#sh_country').val();
			var options = {
				types: ['geocode'], componentRestrictions:{country: country}
			};
			
			var directionsDisplay = new google.maps.DirectionsRenderer();
			var directionsService = new google.maps.DirectionsService();
	        var map = new google.maps.Map(document.getElementById('dvMap'), {
	          zoom: 7,
	          center: {lat: 41.85, lng: -87.65}
	        });
	        directionsDisplay.setMap(map);
					
			
			var calculator	=	jQuery('#sh_farecalculator_enabled').val();
			var currency	=	jQuery('#sh_currency').val();
			var priceperkm	=	jQuery('#sh_priceperkm').val();
			var unit		=	jQuery('#sh_unit').val();

			if(country=='NaN' || country=='undefined' || country==''){ country='UK'; }
			if(priceperkm=='NaN' || priceperkm=='undefined' || priceperkm==''){ priceperkm='10'; }
			if(currency=='NaN' || currency=='undefined' || currency==''){ currency='$'; }

			jQuery('<span>'+currency+'</span>').insertBefore(jQuery('.sh_fare_fare > div > input'));
			jQuery('<span>'+unit+'</span>').insertAfter(jQuery('.sh_fare_distance > div > input'));
			
			var gacstart	=	$('.sh_fare_from input').attr('id');
			var gacend	=	$('.sh_fare_to input').attr('id'); 
			var gacFields = [gacstart,gacend];
			
			$('#'+gacend).addClass('endTrigger');
			$.each( gacFields, function( key, field ) {
				var input = document.getElementById(field);
				if ( input != null ) {
									 
					var autocomplete = new google.maps.places.Autocomplete(input, options);
					 
					google.maps.event.addListener(autocomplete, 'place_changed', function(e) {
				
						var place = autocomplete.getPlace();

						if (!place.geometry) {
							return;
						}		
					});
				}
			});

			
			$('#addPointToRoute').click(function(){
				
				var baseElement	=	jQuery('.endTrigger').parent().parent();
				
				var viaCount	=	jQuery('.via').length;
				
				newElement		=	baseElement.clone();
				newElement.html('');
				
				var newElementID	=	'via_'+viaCount;
				gacFields.push(newElementID);
				
				newElement.append($('<label class="gfield_label">Via</label>'));
				newElement.append($('<div class="ginput_container"><input type="text" class="via medium" id="'+newElementID+'" /><i class="fa fa-times"></i></div>'));
				
				jQuery(newElement).insertBefore( baseElement );

				new google.maps.places.Autocomplete(document.getElementById(newElementID), options);
			});

			$('li.gfield').on('click','button#getNewRoute',function(){

				var waypoints	=	[];
				console.log(gacFields);
				$.each( gacFields, function( key, field ) {
					waypoints.push({
						location:document.getElementById(field).value, 
						stopover:true
					});
				});	
				
				var source = document.getElementById(gacstart).value;
			    var destination = document.getElementById(gacend).value;
			    
			    if(source =='' || destination == ''){
					alert('Please choose both source and destination');
				}
				else{
					calcRoute(calculator,currency,priceperkm,unit,source,destination,directionsDisplay,directionsService,waypoints);
					var viaRoute	=	$('li.sh_fare_from input').val();

					
					$.each($('.via'),function(a,b){
						viaRoute	+=	' - ' + $(b).val();
					});
					
					$('li.sh_fare_via input').val(viaRoute+' - '+$('.endTrigger').val());
				}
			});

			$('ul.gform_fields').on('click','.fa-times',function(){
				var idToRemove	=	$(this).parent().find('input.via').attr('id');
				gacFields	=	jQuery.grep(gacFields, function(value) {
					  						return value != idToRemove;
										});
				
				$(this).parent().parent().remove();
				var waypoints	=	[];
				$.each( gacFields, function( key, field ) {
					waypoints.push({
						location:document.getElementById(field).value, 
						stopover:true
					});
				});	
				var source = document.getElementById(gacstart).value;
			    var destination = document.getElementById(gacend).value;
			    
			    if(source =='' || destination == ''){
					alert('Please choose both source and destination');
				}
				else{
					calcRoute(calculator,currency,priceperkm,unit,source,destination,directionsDisplay,directionsService,waypoints);
				}
			});

			
			
			
		});

	    </script>
	    <?php 
	} 
	
}
$sh_gf_fare_calculator	=	 new sh_gf_fare_calculator();
?>