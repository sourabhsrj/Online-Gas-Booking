 // Declaring required variables
 
 
var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 6;
 
 function isEMailAddr(elem) {
    var str = elem.value;
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!str.match(re)) {
        alert("Verify the e-mail address format.");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
};
 function CheckEntery(form) {
         	 
     var error_div=document.getElementById('errorDiv');
	 
     var errorMassage=' ';		 
	 var valid=true;  
	 var bordercolor = 'fcb39f';
     if(Trim(form.username.value).length == 0)
        {
            errorMassage+='Please enter your username !.<br/>';
			
               valid= false;
        }
	
	  if(Trim(form.first_name.value).length == 0)
      {
	       errorMassage+='Please enter your first name !.<br/>';
		   
            form.first_name.style.borderColor=bordercolor;
		 
               valid= false;
      }	  
	  if(Trim(form.last_name.value).length == 0 )
      {
	  errorMassage+='Please enter your last name !.<br/>';
         form.last_name.style.borderColor=bordercolor;
               valid= false;
      } 
     if(Trim(form.password.value).length == 0)
        {
		  errorMassage+='Please enter your password !.<br/>';
			form.password.style.borderColor=bordercolor;
               valid= false; 
            
        }
		 
		if(Trim(form.password_again.value).length == 0)
		{
		    errorMassage+='Please enter your retyped password !.<br/>';
			form.password_again.style.borderColor=bordercolor;
               valid= false; 
		}
		
		if(Trim(form.address1.value).length == 0)
		{
	       	  errorMassage+='Please enter your first address !.<br/>';
               form.address1.style.borderColor=bordercolor;
               valid= false; 	 
		}
		
	 if(Trim(form.password.value) != Trim(form.password_again.value))
        {
		  errorMassage+='The two passwords is not matching.<br/>';
           form.password_again.style.borderColor=bordercolor;
			  valid= false;
        }
		 
       if(Trim(form.username.value).length <3 || Trim(form.username.value).length>25)
	     {
		     errorMassage+='The username length should be between 3 and 25 .<br/>';
			  form.username.style.borderColor=bordercolor;
			 valid= false;
		 }
		
		 if(Trim(form.password.value).length<6 || Trim(form.password.value).length>25)
	     {
		   
             form.password.style.borderColor=bordercolor;
			 
			 errorMassage+='The password length should be between 6 and 25 .<br/>';
			 valid= false;
		 }
		 		 if(Trim(form.first_name.value).length<3 || Trim(form.first_name.value).length>30)
	     {
		   
             form.first_name.style.borderColor=bordercolor;
			 
			 errorMassage+='The first name length should be between 3 and 30 .<br/>';
			 valid= false;
		 }
		 if(Trim(form.last_name.value).length<3 || Trim(form.last_name.value).length>30)
	     {
		   
             form.last_name.style.borderColor=bordercolor;
			 
			 errorMassage+='The last name length should be between 3 and 30 .<br/>';
			 valid= false;
		 }
 
    if(Trim(form.email.value).length == 0)
        {
			form.email.style.borderColor=bordercolor;
          	errorMassage+='Enter the e-mail  .<br/>';
               valid= false; 
        }
    if(Trim(form.password.value).length<6)
        {
		    form.password.style.borderColor=bordercolor;
	        errorMassage+='Password must be over than 6 characters !.<br/>';
               valid= false;
        }
 
		 
 
       if(Trim(form.captcha_code.value).length == 0)
	    { 
	    form.captcha_code.style.borderColor=bordercolor;
            errorMassage+='You must enter captcha code  .<br/>';  
			  valid= false;
	    }
		 if(Trim(form.telephone.value).length == 0&&Trim(form.mobile.value).length == 0)
		 {
		 form.telephone.style.borderColor=bordercolor;
		 form.mobile.style.borderColor=bordercolor;
		    errorMassage+='Please enter your mobile or telephone number . <br/>';
			  valid= false;
		 }
		 
	if(Trim(form.telephone.value).length!=0)
	 {
   if(checkInternationalPhone(form.telephone.value)==false)
       {
	   form.telephone.style.borderColor=bordercolor;
          errorMassage+='Please enter a valid telephone number  .<br/>';  
               valid= false;
       }
	}
        
    if(Trim(form.mobile.value).length!=0)
	{
	form.mobile.style.borderColor=bordercolor;
      if(checkInternationalPhone(form.mobile.value)==false)
			{
			
          errorMassage+='Please enter a valid mobile number  .<br/>';  
          valid= false;
		  
			}
    }	
    
	var str = form.email.value;
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	
	
    if (!str.match(re)) 
	          { 
			  form.email.style.borderColor=bordercolor;
		 errorMassage+='Verify the e-mail address format .<br/>';
     //   setTimeout("focusElement('" + form.email.name + "', '" + form.email.name + "')", 0);
        valid= false;
               }
			   
        if(checkAgeCheckBox(form)==false)
			{
               errorMassage+='Please set your birthday correctly . <br/>';
			    valid= false;
			}		

	   if(valid == false)
	    {
		  error_div.innerHTML=errorMassage;
		  error_div.focus();
		    return false;
		}
          return true;   

     
};
 


function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}
function trim(s)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not a whitespace, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (c != " ") returnString += c;
    }
    return returnString;
}
function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function checkInternationalPhone(strPhone){
var bracket=3
strPhone=trim(strPhone)
if(strPhone.indexOf("+")>1) return false
if(strPhone.indexOf("-")!=-1)bracket=bracket+1
if(strPhone.indexOf("(")!=-1 && strPhone.indexOf("(")>bracket)return false
var brchr=strPhone.indexOf("(")
if(strPhone.indexOf("(")!=-1 && strPhone.charAt(brchr+2)!=")")return false
if(strPhone.indexOf("(")==-1 && strPhone.indexOf(")")!=-1)return false
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}

 
 
 function checkAgeCheckBox(f){
var dob=new Date();
var date=dob.getDate();
var month=dob.getMonth() + 1;
var year=dob.getFullYear();
var cmbmonth=parseInt(document.getElementById("cmbmonth").options[document.getElementById("cmbmonth").selectedIndex].value);
var cmbday=parseInt(document.getElementById("cmbday").options[document.getElementById("cmbday").selectedIndex].value);
var cmbyear=parseInt(document.getElementById("cmbyear").options[document.getElementById("cmbyear").selectedIndex].value);
age=year-cmbyear;
if(cmbmonth>month){age--;}
else{if(cmbmonth==month && cmbday>=date){age--;}}
if(cmbmonth==0){return false;}
else if(cmbday==0){return false;}
else if(cmbyear>=2005){return false;}
else if(age<'.$age.'){
return true;
}

} 

function Trim(str)

{

    while (str.substring(0,1) == ' ') // check for white spaces from beginning

    {

        str = str.substring(1, str.length);

    }

    while (str.substring(str.length-1, str.length) == ' ') // check white space from end

    {

        str = str.substring(0,str.length-1);

    }

   

    return str;

}
  
  
 
 function DrawCity() {

 country = document.getElementById('csel_field8').value;
 try {
 var CityField = document.getElementById('city_span');
if(document.getElementById('city_select')){
  alert('removing');
 CityField.parentNode.removeChild(CityField);
}
 } catch (oError) {}

var Algeria =["Algiers", "Sidi Bel Abbes", "Ain El Melh", "Khenchela", "Tindouf", "El Wadi", "Souk Ahras", "Tebessa", "Djanet", "Mila", "Boumerdes", "Bordj Bou Arreridj", "Illizi", "Guelma", "Tlemcen Zenata", "In Salah", "Tenes", "Touggourt", "Batna", "Mascara Metmore", "Adrar", "Mecheria", "Jijel Achouat", "Laghouat", "Oum El Bouaghi", "Bechar", "In Amenas", "Tamanrasset", "Tlemcen", "Djelfa", "Medea", "Amsel", "Mostaganem", "M'Sila", "El Bayadh", "Ain Defla", "Al Naameh", "Ain Temouchent", "Ghardaia", "Relizane", "Wadi Souf", "Ouled Djellal", "Saida", "El Golea", "Biskra", "Moaskar", "Hassi-Messaoud", "Jijel", "Bouira", "El Tarf", "Timimoun", "Tiaret", "Ouargla", "Tissemsilt", "Barika", "El Oued", "Tahifet", "Chlef", "Skikda", "Annaba", "Constantine", "Setif", "Oran", "Beni Abbes", "Ouled Isa", "Bades", "Bou-Saada", "Bejaia", "Blida", "Tizi Ouzou", "Sidi Hawwari", "Sidi Faraj", "Other"] 
var AlgeriaA =["الجزائر", "سيدي بلعباس", "عين الملح", "خنشلة", "تندوف", "الوادي", "سوق أهراس", "تيبازة", "دجانيت", "ميلة", "بومرداس", "برج بوعريريج", "إليزي", "قالمة", "تليمسين زيناتا", "عين صالح‎", "تينيس", "توغورت", "باتنا", "مسكارا متموري", "أدرار", "ميشيريا", "جيجل اشوات", "الأغواط", "أم البواقي", "بشار", "اين اميناس", "تمنراست", "تلمسان", "الجلفة", "المدية", "امسل", "مستغانم", "المسيلة", "البيض", "عين الدفلى", "النعامة", "عين تموشنت", "غرداية", "رليزان", "وادي سوف", "اولاد جلال", "سعيدة", "ايل غوليا", "بسكرة", "معسكر", "هاسي ميساود", "جيجل", "البويرة", "الطارف", "تميمون", "تيارت", "ورقلة", "تسمسيلت", "بريكة", "ايل اويد", "تهيفات", "الشلف", "سكيكدة", "عنابة", "قسنطينة", "سطيف", "وهران", "بني عابس", "أولاد عيس", "بادس", "بو سعادة", "بجاية", "بليدة", "تيزي وزو", "سيدي الهواري", "سيدي فرج", "اخرى"]
var Kuwait = ["Kuwait ","Hawalli","Farwaniya","Mubarak al-Kabir","As Sulaybiyah","Ahmadi ","Al Salmiyya","Al Jahrah","Other"];
var KuwaitA = ["مدينة الكويت",   "حولي",  "الفروانية",  "مبارك الكبير",  "الصليبية", "الاحمدي", "السالميه", "الجهراء", "اخرى"];
var Somalia = ["Mogadishu","Odelle","Wagui Galbid","Tugdeer","Soul","Bakoul","Banader","Bri","Bai","Galgud","Gido","Heran","Central Juba","Lower Juba","Madag","Nujal","Sanag","Lower Shbeila","Other"];
var SomaliaA = ["مقديشو", "أودل", "وقويي جالبيد", "تُقدير", "سول",  "باكول", "بنادر",  "بري", "باي", "جالجود", "جدو", "هيران",  "جوبا الوسطى", "جوبا السفلى", "مدق",   "نوجّال", "سناق", "شبيلا السفلي", "اخرى"]; 
var Palestine = ["Jerusalem","Aljaleel Upper Area","Beit Lahem","Hebron","Areeha","Ramallah","Qalqilya","Sulfeit","Nablus","Tulkarem","Jenin","Tubas","Ghaza","Khan Yunis","Deir Balah","Rafah","Other"];
var PalestineA = ["القدس", "منطقة الجليل الأعلى",  "بيت لحم", "الخليل", "اريحا", "رام الله",  "قلقيلية", "سلفيت", "نابلس", "طولكرم", "جنين", "طوباس",  "غزة", "خانيونس", "دير البلح", "رفح", "اخرى"];
var Sudan =["Al Khourtoum","Geneina","Al Fula","Al Qadarif","Kasala","Um Durman","Al Damer","Rabek","Ed Damazin","Warap","Bantio","waw","Yampio","Dongala","Port Sudan","Juba","Rumbek","Wad Madani","Bor","Niala","Kadugli","Malakal","Sanja","Kabuita","Uweil","Al Fasher","Al Abyad","Other"];
var SudanA = ["الخرطوم","الجنينة","الفولة","القضارف","كسلا","ام درمان","الدامر","ربك","الدمازين","واراب","بانتيو","واو","يامبيو","دنقلا","بورسودان","جوبا","رمبيك","وادمدني","بور","نيالا","كادوقلي","ملكال","سنجة","كبويتا","أويل","الفاشر","الأبيض","اخرى"];
var Mauritania = ["Nouakchott","Nouathibou","Takant","Gidimaga","Tirs Zamor","Enshiri","Adrar","Trarza","Hodh El Chargui","Hodh El Gharbi","Laasaba","Kurkoul","Labragna","Other"];
var MauritaniaA = ["نواكشوط","نواذيبو","تكانت","غيديماغا","تيرس زمور","إنشيري","أدرار","ترارزة","الحوض الشرقي","الحوض الغربي","لعصابة","كوركول","لبراكنة","اخرى"];
var Morocco = ["Al Rabat","Al Mohammadia","Al Oyun","Khribka","Bani Malal","Al Jadeeda","Taza","Al Nathoor","Sttat","El Kaser El Kabeer","Al Araesh","Al Khmessat","Klmeem","Tatuan","Al Kneitra","Wajda","Casablanca","Asfi","Fas","Marrakech","Akadeer","Tanja","Maknas","Birsheed","Wadi Zam","Al Fakih Bani Saleh","Tan Tan","Banjreer","Tureert","Barkan","Sedi Sleiman","Al Rachidia","Sedi Qasem","Khneifra","Tiflet","Al Sweira","Tarodant","Saragna Castle","Awlad Al Tayma","Al Yusifia","Sifro","Other"];
var MoroccoA = ["الرباط","المحمدية","العيون  ","خريبكة","بني ملال","الجديدة","تازة","الناظور","سطات","القصر الكبير","العرائش","الخميسات","كلميم","تطوان","القنيطرة","وجدة","الدار البيضاء","أسفي","فاس","مراكش","أكادير","طنجة","مكناس","برشيد","وادي زم","الفقيه بنصالح","طانطان","بنجرير","توريرت","بركان","سيدي سليمان","الراشيدية","سيدي قاسم","خنيفرة","تيفلت","الصويرة","تارودانت","قلعة السراغنة","اولاد التايمة","اليوسفية","صفرو","اخرى"];
var Tunisia = ["Tunis","Sousse","Beja","Bezerte","Nabeul","Kairouan","Chebba","Djerba Mellita","Gafsa","Kelibia","La Marsa","Kabes","Medennine","Al Hamamat","Yasmeen Al Hamamat","Garba","Tozeur","Sfax","Other"];
var TunisiaA = ["تونس","سوسة","باجة","بنزرت","نابل","القيروان","شيبا","دجيربا ميليتا","غافسا","كليبيا","لا مارسا","قابس","مدنين","الحمامات","ياسمين الحمامات","جربة","توزر","صفاقس","اخرى"];
var Libya = ["Tripoli", "Al Rheibat", "Al Zawia", "Ghadamis", "Ghat", "Hon", "Kufra", "Murzuq", "Taraghin", "Western Mountain", "Banghazi", "Sabha", "Dirj", "Masrata", "Sart", "Garyan", "Zwara", "Al Zawi", "Other"];   
var LibyaA = ["طرابلس", "منطقة الرحيبات", "الزاوية", "غداميس", "غهات", "هون", "كوفرا", "مورزوق", "تاراغهين", "الجبل الغربي", "بنغازي", "سبها", "درج", "مصراتة", "سرت", "غريان", "زوارة", "الزاوي", "اخرى"]; 
var Egypt =["Cairo", "Al Fayyoum", "Shbin Al Koum", "Kana", "Suhaj", "Al Sweis", "Dimyat", "Al Aksar", "Malwi", "Bani Sweif", "Edfo", "Asyut", "Aswan", "Al Ismayliya", "Bur Said", "Alexandria", "Al Buhayra", "Al Mahalla Al Kubra", "Al Mansura", "Al Zaga Zig", "Tanta", "Al Mania", "Other" ];  
var EgyptA = ["القاهرة", "الفيوم", "شبين الكوم", "قنا", "سوهاج", "السويس", "دمياط", "الأقصر", "ملوي", "بني سويف", "إدفو", "أسيوط", "أسوان", "إسماعيلية", "بور سعيد", "الإسكندرية", "البحيرة", "المحلة الكبرى", "المنصورة", "الزقازيق", "طنطا", "المنيا", "اخرى"]; 
var Iraq =["Baghdad", "Arbeil", "Al Anbar", "Salah Al Dein", "Babel", "Al Qadisyah", "Al Suleymanyah", "Karbala", "Al Basra", "Al Muthana", "Karkouk", "Misan", "Dahouk", "Najaf", "Diyali", "Naynawa", "Thi Qar", "Waset", "Other"];  
var IraqA =["بغداد", "اربيل", "الأنبار", "صلاح الدين", "بابل", "القادسية", "السليمانية", "كربلاء", "البصرة", "المثنى", "كركوك", "ميسان", "دهوك", "النجف", "ديالى", "نينوى", "ذي قار", "واسط", "اخرى"]; 
var Syria = ["Damascus", "Al Rakka", "Deir Al Zour", "Al Hasaka", "Ed Leb", "Hama", "Lattakia", "Halab", "Reef Damascus", "Al Kunaitera", "Dara'a", "Al Suweida'", "Hims", "Tartous", "Other"];  
var SyriaA = ["دمشق", "الرقة", "دير الزور", "الحسكة", "إدلب", "حماة", "اللاذقية", "حلب", "ريف دمشق", "القنيطرة", "درعا", "السويداء", "حمص", "طرطوس", "اخرى"];  
var Lebanon = ["Beirut", "Junia", "Saida", "Tripoli", "Ash Shweyfat", "Babda", "Furn Ash Shubbak", "Houche-Al-Oumara", "Lebanon Mountain", "Al Shamal", "Zahla", "Al Bikaa", "Al Nabatiya", "Al Janoub", "Other"];   
var LebanonA = ["بيروت", "جونيه", "صيدا", "طرابلس", "الشويفات", "بابدا", "فرن الشباك", "حوش العمارة", "جبل لبنان", "الشمال", "زحلة", "البقاع", "النبطية", "الجنوب", "اخرى"]; 
var Jordan =["Amman", "Al Balqa", "Al Karak", "Al Mafrak", "Al Tafilah", "Ajlun", "Sahab", "Aqaba", "Al Zarqa", "Jerash", "Ma'an", "Madaba", "Irbid", "Other"];  
var JordanA = ["عمان", "البلقاء", "الكرك", "المفرق", "الطفيلة", "عجلون", "سحاب", "العقبة", "الزرقاء", "جرش",  "معان", "مادبا",  "إربد",  "اخرى"]; 
var SaudiArabia = ["Al Riyadh", "Ar Ar", "Jeddah", "Dammam", "Abar Ali", "Al Ahsa", "Al Hariq", "Al Hulwah", "Al Lith", "Mecca Al Mukarrama", "Najran", "Tabouk", "Jazan", "Ha'el", "Aseer", "Al Baha", "Al Jouf", "Western Territory", "Medina Al Munawara", "Al Kaseem", "Sedir", "Eastern Area", "Other"];    
var SaudiArabiaA = ["الرياض", "عرعر", "جدة", "الدمام", "آبار علي", "الاحصى", "الحريق", "الحلوة", "اليث", "مكة المكرمة", "نجران", "تبوك", "جازان", "حائل", "عسير", "الباحة", "الجوف", "الحدود الشمالية", "المدينة المنورة", "القصيم", "سدير", "المنطقة الشرقية", "اخرى"];  
var Antarctica = ["Base Arturo Prat", "Base Bernardo O'Higgins", "Base Esperanza", "Base Jubany", "Base Marambio Centro Met.Antarctico", "Base Orcadas", "Centro Met. Antarctico", "Dinamet-Uruguay", "Great Wall", "Mcmurdo", "Other"];  
var AntarcticaA =["باسي ارتورو برات", "باسي برناردو او هيغينس", "باسي اسبرانزا", "باسي جوباني", "باسي مارامبيو", "باسي اوركاداس", "ثنترو مت انتاركتيكو", "ديناميت اوروغواي", "جريت وول", "مكموردو", "اخرى"];  
var Anguilla =["The Valley","Crocus Hill","Other"];
var AnguillaA =["ذا فالي", "كروكوس هيل", "اخرى" ];
var Bahrain = ["Al Manama", "Al Janoubia", "Al Shamalia", "Capital", "Al Muharraq", "Al Wasta", "Other"];
var BahrainA = ["المناما", "الجنوبية", "الشمالية", "العاصمة", "المحرق", "الوسطى", "اخرى"];  
var Qatar = ["Al Dawha", "Al Rayyan", "Al Wakra", "Al Khour", "Dukhan", "Leshmal", "Maseed", "Al Shahania", "Al Daheel", "Western Gulf", "Ras Lfan", "Other"];     
var QatarA = ["الدوحة", "الريان", "الوكرة", "الخور", "دخان", "لشمال", "مسيعيد", "الشحانية", "الدحيل", "الخليج الغربي", "رأس لفان", "اخرى"];  
var UnitedArabEmirates =["Abu Dhabi", "Al Ain", "Dubai", "Um Al Qaywayn", "Al Sharja", "Ajman", "Ras Al Kheima", "Um Al Kayween", "Al Fujeira", "Other"];    
var UnitedArabEmiratesA =["أبوظبي", "العين", "دبي", "ام القيوين", "الشارقة", "عجمان", "رأس الخيمة", "أم القيوين", "الفجيرة", "اخرى"];     
var Oman =  ["Muscat", "Al Batinah", "Nazwa", "Salala", "Al Sharkia", "Ad Dakhiliyya", "Al Thaheera", "Al Wasta", "Al Brimi", "Sahar", "Msandam", "Thafar", "Other"]; 
var OmanA = ["مسقط", "الباطنة", "نزوه", "صلاله", "الشرقية", "الداخلية", "الظاهرة", "الوسطى", "البريمي", "صحار", "مسندم", "ظفار", "اخرى"]; 
var Yemen =["San'a'", "Shaqra'", "Adan", "Dhamar", "Ash Shaykh Uthman", "Mamoudzou", "Hadhramaut", "Lahij", "Hajar", "Ibb", "Amanah al-Asmah", "Al Hudaydah", "Taizz", "Other"];  
var YemenA =["صنعاء", "شقراء", "عدن", "ذمار", "الشيخ عثمان", "مامودزو", "حضرموت", "لاهيج", "حجر", "اب", "أمانة العاصمة", "الحديدة", "تعز", "اخرى"]; 
var Iran = ["Tehran", "Abadan", "Arak", "Babulsar", "Najafabad", "Persepolis", "Ramsar", "Shiraz", "Zahedan", "Zanjan", "Zargan", "Yazd", "Qom", "Ahwaz", "Other"];    
var IranA =["طهران", "ابادان", "اراك", "بابولسار", "ناجافاباد", "بيرسيبوليس", "رامسار", "شيراز", "زهدان", "زنجان", "زرغان", "يازد", "قوم", "اهواز", "اخرى"];  
var Japan =[ "Tokyo","Komae","Yamagata","Other"];
var JapanA =["طوكيو","كوماي","ياماغاتا","اخرى"];
var Andorra =["Andorra la Villa","Other"];
var AndorraA =["اندورا لا فيلا","اخرى"];
var Liechtenstein = ["Vaduz","Schaan","Schrunz","Other"];
var LiechtensteinA = ["فادوز","شان","شرونز","اخرى"];
var Ethiopia = ["Addis Abeba", "Gode", "Gondar", "Gore", "Jiggiga", "Jimma", "Neghelli", "Other"];    
var EthiopiaA = ["اديس ابيبا", "غودي", "غوندار", "غوري", "جيغيغا", "جيما", "نيغهيلي", "اخرى"];   
var Azerbaijan =   ["Baku", "Fizuli", "Gyanja", "Lankaran", "Lokbatan", "Mastaga", "Naxcivan", "Zakatala", "Genca", "Sumqayit", "Mingecevir", "Other"];  
var AzerbaijanA =   ["باكو", "فيزولي", "غيانجا", "لانكران", "لوكبتان", "مستاغا", "ناكسسيفان", "زكاتالا", "جينكا", "سمكاييت", "مينغيسيفير", "اخرى"]; 
var Eritrea =["Asmera","Adi Ugri","Dekemhare","Keren","Other"];
var EritreaA =["اسميرا", "ادي اوغري",  "ديكيمهاري", "كيرين", "اخرى"];  
var Aruba =["Oranjestad","Queen Beatrix Airport","Other"];
var ArubaA =["اورانجستاد", "مطار الملكة بياتركس", "اخرى"];
var Armenia =["Yerevan", "Abovyan", "Gyumri", "Vanadzor", "Vagharshapat", "Other"];  
var ArmeniaA =["يريفان", "ابوفيان", "غيومري", "فانادزور", "فاغهارشابات", "اخرى"]; 
var Estonia =["Tallinn", "Kunda", "Kuressaare", "Maardu", "Narva", "Pjarnu", "Raasiku", "Ristna", "Turi", "Valga", "Tartu", "Other"];  
var EstoniaA =["تالين", "كوندا", "كويساري", "ماردو", "نارفا", "بجارنو", "راسيكو", "ريستنا", "توري", "فالغا", "تارتو", "اخرى"]; 
var CentralAfricanRepublic =["Bangui","Bangassou","Bimbo","Bossangoa","Other"];
var CentralAfricanRepublicA =["بانجوي","بونغاسو","بيمبو","بوسانغوا","اخرى"];
var Afghanistan =["Kabul", "Bost Laskar", "Herat", "Qandahar", "Ghurain", "Other"];   
var AfghanistanA =  ["كابول", "بوست لاسكار", "هيرات", "قندهار", "غوريان", "اخرى"];
var Ecuador =  ["Quito", "Ambato", "Cayambe", "Esmeraldas", "Galapagos Islands", "Latacunga", "Machala", "Portoviejo", "Salinas", "Tiputini", "Tulcan", "Cuenca", "Guayaquil", "Other"];   
var EcuadorA = ["كويتو", "امباتو", "كايامبي", "اسميرالداس", "جزر غالاباغوس", "لاتاكونغا", "ماشالا", "بورتوفييخو", "ساليناس", "تيبوتيني", "تولكان", "كوينكا", "غواي اكويل", "اخرى"];
var Argentina =["Buenos Aires", "Distrito Federal", "Catamaraca", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Misiones", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago Del Estero", "Tucuman", "Chaco", "Chubut", "Neuquen", "Vincente Lopez", "Cordoba", "Mendoza", "Other"];    
var ArgentinaA =["بوينوس ايريس", "دستريتو فيديرال", "كتاماراكا", "كورينتيس", "انتري ريوس", "فورموسا", "جوجوي", "لا بامبا", "لا ريوخا", "ميسيونيس", "ريو نيغرو", "سالتا", "سان خوان", "سان لويس", "سانتا كروث", "سانتا في", "سانتياغو ديل استيرو", "تكومان", "تشاكو", "تشوبوت", "نيوكوين", "فنسنته لوبيز", "كوردوبا", "مندوزا", "اخرى"]; 
var Angola =["Luanda", "Cabinda", "Cacuaco", "Caxito", "Other"];  
var AngolaA =["لواندا", "كابيندا", "كاكواكو", "كاكسيتو", "اخرى"]; 
var Pakistan =["Islamabad", "Chiniot", "Faisalabad", "Gujranwala", "Gujrat", "Hyderabad", "Multan", "Kasur", "Okara", "Sahiwal", "Lahore", "Karachi", "Other"];   
var PakistanA =["اسلاماباد", "تشينيوات", "فيصل اباد", "غوجرانوالا", "غوجرات", "حيدر اباد", "مولتان", "كاسور", "اوكارا", "ساهيوال", "لاهوري", "كراتشي", "اخرى"]; 
var Albania =["Tirane","Durres","Elbasan","Shkoder","Other"];
var AlbaniaA =["تيران","دوريس","الباسان","شكودير","اخرى"];
var Brazil =["Brasilia", "Alegre", "Aruja", "Belford Roxo", "Buri", "Caapiranga", "Sao Paulo", "Rio de Janeiro", "Santa Maria", "Other"]; 
var BrazilA =["براسيليا", "اليغري", "اروخا", "بيلفورد روكسو", "بوري", "كابيرانغا", "ساو باولو", "ريو دي جانييرو", "سانتا ماريا", "اخرى"];
var BritishVirginIslands =["Road Town","Other"];
var BritishVirginIslandsA =["رود تاون","اخرى"];
var Portugal =["Lisbon", "Algoso", "Caminha", "Mertola", "Santarem", "Tavira", "Viseu", "Sao Vicente", "Ribeira Brava", "Mirandela", "Odemira", "Porto", "Aveiro", "Other"];   
var PortugalA =["لشبونة", "الغوسو", "كامينها", "ميرتولا", "سانتاريم", "تافيرا", "فيسيو", "ساو فيسينتي", "ريبيرا برافا", "ميرانديلا", "اوديميرا", "بورتو", "افييرو", "اخرى"];  
var BosniaandHerzegovina =["Sarajevo", "Banja Luka", "Kotor-Varos", "Sanski Most", "Doboj", "Other"];   
var BosniaandHerzegovinaA =["سراييفو", "بانجا لوكا", "كوتور فاروس", "سانسكي موست", "دوبوج", "اخرى"];
var Montenegro =["Podgorica","Other"];
var MontenegroA =["بودغوريكا","اخرى"];
var CapeVerde =["Praia","Sal","Other"];
var CapeVerdeA =["برايا","سال","اخرى"];
var ElSalvador =["San Salvador", "Acajutla", "San Miguel", "San Vicente", "Santa Ana", "Sonsonate", "Usulutan", "Other"];  
var ElSalvadorA =["سان سالفادور", "اكاخوتلا", "سان ميغيل", "سان فيثينتي", "سانتا انا", "سونسوناتي", "اوسولوتان", "اخرى"]; 
var RepublicOfChina =["Beijing", "Dongyang", "Bengbu", "Chenzhou", "Dingxian", "Garze", "Hanzhong", "Huizhou", "Jartai", "Jixi", "Other"];    
var RepublicOfChinaA =["بيجينغ", "دونغ يانغ", "بينغ بو", "تشينزهو", "دينغكسيان", "غارز", "هانزهونغ", "هويز هو", "جارتاي", "جيكسي", "اخرى"];
var Gabon =["Libreville", "Bitam", "Franceville", "Koulamoutou", "Lambarene", "Lastoursville", "Moanda", "Port-Gentil", "Other"];   
var GabonA =["ليبريفيل", "بيتام", "فرانسفيل", "كوالاموتو", "لامبارين", "لاستورسفيل", "مواندا", "بورت جنتيل", "اخرى"];
var ChristmasIsland =["Flying Fish Cove", "Cocos Island", "Christmas/Cassidy", "Other"];  
var ChristmasIslandA =["فلاينغ فش كوف", "جزيرة كوكوس", "عيدالميلاد/كاسيدي", "اخرى"]; 
var Cameroon =["Yaounde", "Baffoussam", "Buea", "Edea", "Mamfe", "Mbalmayo", "Douala", "Other"];  
var CameroonA =["ياوندي", "بافوسام", "بويا", "ايديا", "مامفي", "مبالمايو", "دوالا", "اخرى"]; 
var Germany =["Berlin", "Frankfurt", "Aachen", "Altenbruch", "Bamberg", "Blexen", "Bremen", "Ebersberg", "Essen", "Freyung", "Gera", "Hamburg", "Larbruch", "Munich", "Cologne", "Stuttgart", "Other"];   
var GermanyA =["برلين", "فرانكفورت", "آخين", "التينبروخ", "بامبرغ", "بليكسين", "بريمين", "ايبرسبرغ", "ايسين", "فريونغ", "غيرا", "هامبورغ", "لاربروخ", "ميونيخ", "كولون", "شتوتغارت", "اخرى"];
var Mexico =["Mexico ", "Guadalupe", "Campeche", "Colima", "Guanajuato", "Nayarit", "Quintana Roo", "Tabasco", "Tamaulipas", "Yucatan", "Puebla", "Aguas Calientes", "Other"]; 
var MexicoA =["مكسيكو سيتي", "غوادالوبي", "كامبيش", "كوليما", "غوانخواتو", "ناياريت", "كينتانا روو", "تاباسكو", "تاماوليباس", "يوكاتان", "بويبلا", "اغواس كاليينتيس", "اخرى"];
var Austria =["Vienna", "Bergheim", "Innsbruck", "Ramsau", "Vocklabruck", "Zeltweg", "Baden", "Gussing", "Salzburg", "Other"];   
var AustriaA =["فيينا", "بيرغهايم", "اينس بروك", "رامساو", "فوكلابروك", "زلتويغ", "بادن", "غوسينغ", "سالزبورغ", "اخرى"];
var India =["New Delhi", "Agartala", "Ahmadabad", "Ajmer", "Anantapur", "Auraiya", "Basirhat", "Bhopal", "Chitradurga", "Faridabad", "Itanagar", "Khadki", "Muzaffarpur", "Puri", "Mumbai", "Other"];  
var IndiaA =["نيو دلهي", "اغارتالا", "احمداباد", "اجمير", "انانتابور", "اورايا", "بصيرهات", "بهوبال", "تشيترادورغا", "فريداباد", "ايتاناغار", "كاهادكي", "مظفربور", "بوري", "مومباي", "اخرى"];
var UnitedStates =["Washington Dc", "New York", "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kwajelein", "Kentucky", "Maine", "Louisiana", "Maryland", "Massachusetts", "Minnesota", "Michigan", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Pennsylvania", "Oregon", "South Carolina", "Rhode Island", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Wake Island", "West Virginia", "Wisconsin", "Wyoming", "Other"];  
var UnitedStatesA =["واشنطن", "نيويورك", "الباما", "الاسكا", "اريزونا", "اركانساس", "كاليفورنيا", "كولورادو", "كونيكتيكوت", "ديلاوير", "ديستريكت اوف كولومبيا", "فلوريدا", "جيورجيا", "هاواي", "ايداهو", "الينوي", "انديانا", "ايوا", "كانساس", "كواليجين", "كنتاكي", "ماين", "لويسيانا", "ماريلاند", "ماساتشوستس", "مينيسوتا", "ميتشيغان", "ميسيسيبي", "ميزوري", "مونتانا", "نبراسكا", "نيفادا", "نيو هامشير", "نيو جيرسي", "نيو مكسيكو", "شمال كارولاينا", "شمال داكوتا", "اوهيو", "اوكلاهوما", "بنسيلفانيا", "اوريغون", "جنوب كارولاينا", "روود آيلاند", "جنوب داكوتا", "تينيسي", "تكساس", "يوتا", "فيرمونت", "فيرجينيا", "ويك آيلاند", "غرب فرجينبا", "وسكونسن", "ويومبنغ", "اخرى"];
var Greece =["Athens", "Arginion", "Akharnai", "Island Of Crete", "Korinthos", "Paros", "Peristerion", "Santorini", "Sikinos", "Tilos", "Zakinthos", "Karditsa", "Other"];  
var GreeceA =["اثينا", "ارغينيون", "اخارناي", "جزر الكريت", "كورينثوس", "باروس", "باريستيريون", "سانتوريني", "سيكينوس", "تيلوس", "زاكينثوس", "كارديتسا", "اخرى"];
var Indonesia =["Jakarta", "Amahai", "Amurang", "Banjarmasin", "Bengkulu", "Cibatu", "Karawang", "Medan", "Probolinggo", "Sumbawa Besar", "Tarempa", "Surabaya", "Other"]; 
var IndonesiaA =["جاكارتا", "اماهي", "امورانغ", "بنجارماسين", "يينغكولو", "سيباتو", "كاراوانغ", "ميدان", "بروبولينغو", "سومبايا يسار", "تاريمبا", "سورابايا", "اخرى"];
var Uruguay =["Montevideo", "Artigas", "Chapicuy", "Colonia", "Durazno", "Las Piedras", "Maldonado", "Melo", "Paso De Los Toros", "Paysandu", "Punta Del Este", "Other"];  
var UruguayA =["مونتي فيديو", "ارتيغاس", "تشابيكوي", "كولونيا", "دورازنو", "لاس بيدراس", "مالدونادو", "ميلو", "باسو دي لوس توروس", "بايساندو", "بونتا ديل استي", "اخرى"];
var Uzbekistan =["Tashkent", "Ak-Bajtal", "Almalyk", "Buahara", "Buzaubaj", "Chimbaj", "Dzizak", "Karshi", "Fergana", "Nukus", "Nurata", "Namangan", "Other"];  
var UzbekistanA =["تاشكنت", "اكباجتال", "الماليك", "بواهارا", "بوزاوباج", "شيمباج", "دزيزاك", "كارشي", "فيرغانا", "نوكوس", "نوراتا", "نامنغان", "اخرى"];
var Uganda =["Kampala","Entebbe","Other"];
var UgandaA =["كمبالا","انتيبيه" ,"اخرى"];
var Ukraine =["Kiev", "Donetsk", "Izium", "Shepetivka", "Yalta", "Shostka", "Vinnytsia", "Uzhhorod", "Poltava", "Uman", "Nizhyn", "Merefa", "Odessa", "Kharkov", "Other"]; 
var UkraineA =["كييف", "دونتسك", "ازيوم", "شيبيتيفكا", "يالتا", "شوستكا", "فينيتسيا", "اوزهورود", "بولتافا", "اومان", "نزهاين", "ميريفا", "اوديسا", "كاركوف", "اخرى"];
var Ireland =["Dublin", "Cork", "Athlone", "Ballycanew", "Carlow", "Crookhaven", "Kildare", "Tipperary", "Tramore", "Tullamore", "Limerick", "Other"];
var IrelandA =["دبلن", "كورك", "اثلون", "باليكانيو", "كارلو", "كرووكهيفين", "كيلداري", "تيبيراري", "تراموري", "تولاموري", "لايمريك", "اخرى"];
var Iceland =  ["Reykjavik", "Akureyri", "Kopavogur", "Hafnarfjordur", "Other"];
var IcelandA = ["ريكجافيك", "اكورايري", "كوبافوغور", "هفنارفجوردور", "اخرى"]; 
var Italy =["Rome", "Alessandria", "Ascoli Piceno", "Cagliari", "Catania", "Florence", "Marsala", "Palermo", "Ravenna", "Rimini", "Venice", "Milan", "Other"];   
var ItalyA =["روما", "اليساندريا", "اسكولي بيشينو", "كاغلياري", "كاتانيا", "فلورنس", "مارسالا", "باليرمو", "رافينو", "ريميني", "فينيسيا", "ميلان", "اخرى"];
var Paraguay =["Asuncion", "Caacupe", "Ciudad Del Este", "Concepcion", "Coronel Oviedo", "Encarncaion", "Fuerte Olimpo", "Mariscal Estigarribia", "Nueva Asuncion", "Paraguari", "Pilar", "Other"];  
var ParaguayA =["اسونثيون", "كااكوبي", "ثيوداد ديل استي", "كونثيبثيون", "كورونيل افييدو", "انكرناثيون", "فوريرتي اوليمبو", "ماريسكال استيغاريبيا", "نويفا اسونثيون", "باراغواري", "بيلار", "اخرى"];
var Palau =["Melekeok","Koror","Other"];
var PalauA =["ميليكيوك","كورور","اخرى"];
var Bulgaria =["Sofia", "Botev Vrah Top/Sommet", "Burgas", "Kurdjali", "Lovetch", "Mussala Top/Sommet", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Rousse", "Sandanski", "Stara Zagora", "Vidin", "Vraca", "Varna", "Other"]; 
var BulgariaA =["صوفيا", "بوتيف فرا توب سميت", "بورغاس", "كوردجالي", "لوفيتش", "موسالا توب سوميت", "بيرنيك", "بليفين", "بلوفديف", "رازغراد", "رووس", "ساندنسكي", "ستارا زاغورا", "فيدين", "فراكا", "فارنا", "اخرى"]; 
var Bangladesh =["Dhaka", "Barisal", "Bogra", "Ishurdi", "Jessore", "Khulna", "Narayanganj", "Rangpur", "Sylhet", "Tangail", "Chittagong", "Other"]; 
var BangladeshA =["دهاكا", "باريسال", "بوغرا", "ايسهوردي", "جيسوري", "خولنا", "نارايانغنج", "رانغبور", "سيلهيت", "تنغيل", "تشيتاغونغ", "اخرى"];   
var Bermuda =["Hamilton","Saint George","Somerset","Other"];
var BermudaA =["هاملتون","ساينت جورج","سومرست","اخرى"];
var Bhutan =["Thimphu","Paro","Other"];
var BhutanA =["ثيمبو","بارو","اخرى"];
var Benin =["Porto-Novo","Save","Cotonou","Other"];
var BeninA =["بورتو نوفو","ساف","كوتونو","اخرى"];
var Bolivia = ["Sucre", "Apolo", "Banegas", "Bella Vista", "Bermejo", "Camiri", "Charana", "Puerto Suarez", "Robore", "Magdalena", "Santa Cruz", "Other"]; 
var BoliviaA = ["سوكري", "ابولو", "بنيغاس", "بيلا فيستا", "بارميجو", "كاميري", "شارانا", "بويرتو سواريث", "روبوري", "مغدلينا", "سانتا كروز", "اخرى"];
var Botswana =["Gaborone", "Francistown", "Ghanzi", "Jwaneng", "Kasane", "Letlhakane", "Mehalapye", "Maun", "PandaMatenga", "Other"];
var BotswanaA =["غابوروني", "فرانسس تاون", "غانزي", "جاواننغ", "كاسان", "ليتلهاكانه", "ميهالابي", "ماون", "باندا ماتنغا", "اخرى"];
var Panama =["Panama ", "La Concepcion", "Bocas Del Toro", "Chitre", "Colon", "Coronado", "Aguadulce", "La Chorrera", "Other"];
var PanamaA =["بنما سيتي", "لاكونثبثيون", "بوكاس ديل تورو", "تشيتري", "كولون", "كورونادو", "اغوا دولثة", "لاتشوريرا", "اخرى"];
var BurkinaFaso =["Ouagadougou","Other"];
var BurkinaFasoA =["اواغادوغو","اخرى"];
var Burundi =["Bujumbura","Other"];
var BurundiA =["بوجومبورا","اخرى"];
var Poland =["Warsaw", "Bialystok", "Gorzow Wlkp", "Torun", "Wroclaw", "Zabrze", "Zamosc", "Zielona Gora", "Sniezka", "Poznan", "Rzeszow", "Other"];  
var PolandA =["وارسو", "بياليستوك", "غورزو ولكب", "تورون", "وروكلاو", "زبرزي", "زاموش", "زيلونا غورا", "زنيزسكا", "بوزنان", "رسيزساو", "اخرى"];
var Peru =["Lima", "Anta", "Cajamarca", "Huancayo", "San Juan", "Trumbes", "Mollendo", "La Victoria", "Other"];  
var PeruA =["ليما", "انتا", "كاخاماركا", "هوانكايو", "سان خوان", "ترومبيس", "مويندو", "لا فيكتوريا", "اخرى"];
var Taiwan =["Taipei", "Chia-i", "Kangshan", "Ta-cho-shui", "Ta-wu", "Taidong", "Tan-shui", "Miao-li", "Hua-lien", "Hsin-tien", "Hengchun", "Formosa", "Other"];
var TaiwanA =["تايبي", "تشيا-اي", "كانغشان", "تا-شو-شوي", "تا-وو", "تايدونغ", "تان-شوي", "مياو-لي", "هوا-لين", "هسين-تين", "هينغشون", "فورموسا", "اخرى"]; 
var Turkmenistan =["Ashgabat", "Bajramali", "Bakherden", "Bezemein", "Chardzhev", "Gyshgy", "Kerki", "Tarta", "Tedzhen", "Ufra", "Ekezhe", "Other"]; 
var TurkmenistanA =["اشغابات", "باجرامالي", "باكهردن", "بيزيمين", "شاردزهيف", "غيشغي", "كيركي", "تارتا", "تيدزهين", "اوفرا", "اكيزهي", "اخرى"];
var Turkey =["Ankara", "Istanbul", "Afyon", "Anamur", "Askale", "Cubuk", "Pasinler", "Sakarya", "Torbali", "Van", "Zonguldak", "Pamukkale", "Izmir", "Adana", "Other"];  
var TurkeyA =["انقرة", "اسطنبول", "افيون", "انامور", "اسكالي", "كوبوك", "باسينلر", "ساكاريا", "توربالي", "فان", "زونغولدك", "باموكالة", "ازمير", "ادانا", "اخرى"];
var TrinidadandTobago =["Port Of Spain", "Arima", "San Fernando", "Scarborough", "Tobago", "Trinidad", "Other"];  
var TrinidadandTobagoA =["بورت اسبانيا", "اريما", "سان فيرناندو", "سكاربورو", "توباغو", "ترينيداد", "اخرى"];
var Chad =["Djamena","Faya","Other"];
var ChadA =["جامينا","فايا","اخرى"];
var CzechRepublic =["Prague", "Beroun", "Budweis", "Cervena", "Cesky Tesin", "Cheb", "Churanov", "Frydek", "Milesovka", "Rosice", "Brno", "Other"];
var CzechRepublicA =["براغ", "بيرون", "بدويس", "سيرفينا", "سيسكي تيسين", "تشيب", "شورانوف", "فريديك", "ميليسوفكا", "روسيس", "برنو", "اخرى"];
var Chile =["Santiago", "Antofagasta", "Balmaceda", "Cerro Blanco", "Osorno", "San Antonio", "Talcahuano", "Isla Diego Ramirez", "Temuco", "Other"]; 
var ChileA =["سانتياغو", "انتوفاغاستا", "بالماثيدا", "ثيرو بلانكو", "اوسورنو", "سان انتونيو", "تالكاهوانو", "ايسلا دييغو راميريث", "تيموكو", "اخرى"]; 
var Tanzania =["Dadoma", "Kigoma", "Mtwara", "Mwanza", "Tanga", "Zanzibar", "Dar Es Salaam", "Arusha", "Other"];  
var TanzaniaA =["دادوما", "كيغوما", "متوارا", "موانزا", "تانغا", "زنزيبار", "دار السلام", "اروشا", "اخرى"];
var Togo =["Lome","Other"];
var TogoA =["لومي","اخرى"];
var EastTimor =["Dili","Other"];
var EastTimorA =["ديلي","اخرى"];
var Grenada =["St. Georges", "Point Salines Airport", "Other"]; 
var GrenadaA =["ساينت جورجس", "مطار بوينت ساليناس", "اخرى"];
var Comoros =["Moroni","Dzaoudzi","Other"];
var ComorosA =["موروني","دزاودزي","اخرى"];
var MarshallIslands =["Majuro","Other"];
var MarshallIslandsA =["ماجورو","اخرى"];
var Congo =["Brazzaville", "Impfondo", "Madingo-Kayes", "Pointe-Noire", "Other"]; 
var CongoA =["برازافيل", "ايمبفوندو", "مادينغو-كايس", "بوينت-نوير", "اخرى"];
var DemocraticCongo =["Kinshasa", "Baya", "Boma", "Kahemba", "Kananga", "Kipushi", "Kisangani", "Likasi", "Lubumbashi", "Matadi", "Mbandaka", "Other"]; 
var DemocraticCongoA =["كينشاسا", "بايا", "بوما", "كاهيمبا", "كانانغا", "كيبوشي", "كيسانغاني", "ليكاسي", "لبمبوشي", "ماتادي", "مبانداكا", "اخرى"]; 
var SouthAfrica =["Pretoria", "Parow", "Alexander Bay", "Annadale", "Beauvallon", "Boshof", "Calvinia", "Durban", "Grootmis", "Illovo", "Kempton Park", "Rustenburg", "PineTown", "Johannesburg", "Other"];  
var SouthAfricaA =["بريتوريا", "بارو", "اليكسندر باي", "اناداله", "بيوفالون", "بوشوف", "كالفينيا", "دوربان", "غروتميس", "ايل لوفو", "كمبتون بارك", "روستنبورغ", "باين تاون", "جوهانسبورغ", "اخرى"];
var Georgia =["Tbilisi", "Gori", "K'ut'aisi", "Rustavi", "Other"]; 
var GeorgiaA =["تبيليسي", "غوري", "كوتايسي", "روستافي", "اخرى"]; 
var Djibouti =["Djibouti","Other"];
var DjiboutiA =["جيبوتي","اخرى"];
var Dominica =["Roseau","Marigot","Other"];
var DominicaA =["روسو","ماريغوت","اخرى"];
var Rwanda =["Kigali","Other"];
var RwandaA =["كيغالي","اخرى"];
var Russia =["Moscow", "Korolyov", "Adler", "Amga", "Bagdarin", "Bogotol", "Chernjaevo", "Groznyi", "Kamycin", "Kolpino", "Ljuberzy", "Miass", "Pyatigorsk", "Saint Petersburg", "Other"]; 
var RussiaA =["موسكو", "كوروليوف", "ادلر", "امغا", "باغدارين", "بوغوتول", "تشيرنخاييفو", "غروزنيي", "كامايسين", "كولبينو", "لجوبرزي", "مياس", "بياتيغورسك", "ساينت بيترسبورغ", "اخرى"];
var Romania = ["Bucharest", "Bacau", "Calafat", "Slatina", "Talmaciu", "Timisoara", "Pitesti", "Slobozia", "Sibiu", "Oradea", "Galati", "Cernavoda", "Brasov", "Other"]; 
var RomaniaA = ["بوخارست", "باكاو", "كالافات", "سلاتينا", "تالاماسيو", "تيميسوارا", "بيتيستي", "سلوبوزيا", "سيبيو", "اوراديا", "غالاتي", "سيرنافودا", "براسوف", "اخرى"]; 
var Zambia =["Lusaka", "Chingolo", "Kabwe", "Livingstone", "Ndola", "Other"]; 
var ZambiaA =["لوساكا", "تشينغولا", "كابوي", "ليفينغ ستون", "ندولا", "اخرى"]; 
var Zimbabwe =["Harare", "Bulawayo", "Chegutu", "Chitungwiza", "Karoi", "Mount Darwin", "Rusape", "Victoria Falls", "Hwange National Park", "Other"];
var ZimbabweA =["هاراري", "بولاوايو", "تشغوتو", "تش", "كاروي", "ماونت داروين", "روسابي", "فيكتوريا فولس", "هوانغي ناشيونال بارك", "اخرى"];
var CotedIvoire =["Yamoussoukro", "Dabou", "Gagnoa", "Grand-Bassam", "Abidjan", "Other"];
var CotedIvoireA =["ياموسوكرو", "دابو", "غاغنوا", "غراند-باسام", "ابيدجان", "اخرى"];
var Samoa =["Apia","Other"];
var SamoaA =["ابيا","اخرى"];
var SanMarino =["San Marino","Other"];
var SanMarinoA =["سان مارينو","اخرى"];
var SaoTomeAndPrincipe =["Sao Tome","Other"];
var SaoTomeAndPrincipeA =["ساو تومي","اخرى"];
var SriLanka =["Colombo", "Katunayake", "Moratuwa", "Negombo", "Sri Jayavardhanapura", "Kandy", "Other"];  
var SriLankaA =["كولومبو", "كاتونوياكي", "موراتوا", "نيغومبو", "سري جايافاردهانابورا", "كاندي", "اخرى"];
var Slovakia =["Bratislava", "Ivanka Pri Dunaji", "Nova Zamki", "Senec", "Sliac", "Trnava", "Piestany", "Poprad", "Kosice", "Other"];
var SlovakiaA =["براتيسلافا", "ابفانكا بري دونانجي", "نوفا زامكي", "سينيك", "سلياك", "ترنافا", "بييستاني", "بوبراد", "كوسيشي", "اخرى"];
var Slovenia =["Ljubljana", "Celje", "Kranj", "Murska Sobota", "Skofljica", "Other"];  
var SloveniaA =["لجوبجلانا", "سيلجي", "كرانج", "مورسكا سوبوتا", "سكوفلجيكا", "اخرى"]; 
var Singapore =["Singapore", "Bukit Panjang", "Bukit Timah", "Changi", "Serangoon", "Other"]; 
var SingaporeA =["سنغافورة", "بوكيت بانجانغ", "بوكيت تيماه", "تشانغي", "سيرانغون", "اخرى"]; 
var Senegal =["Dakar", "Kaolack", "Mbour", "Thies", "Ziguinchor", "St Louis", "Other"]; 
var SenegalA =["داكار", "كاولاك", "مبور", "ثييس", "زيغوينشور", "سانت لويس", "اخرى"]; 
var Suriname =["Paramaribu" , "New Nickerie" , "Paranam" , "Other"]; 
var SurinameA =["باراماريبو", "نيو نيكيري", "بارانام", "اخرى"];
var Switzerland =["Berne", "Zurich", "Sion", "Carouge", "Koniz", "Wynau", "Zug", "Payerne", "Geneva", "Other"];    
var SwitzerlandA =["بيرني", "زيورخ", "سيون", "كاروغ", "كونيز", "وايناو", "زوغ", "بايرني", "جينيفا", "اخرى"]; 
var SierraLeone =["Free Town","Other"];
var SierraLeoneA =["فري تاون","اخرى"];
var Seychelles =["Victoria","Seychelles International Airport","Other"];
var SeychellesA =["فكتوريا", "مطار سيشيل الدولي","اخرى"];
var Serbia =["Belgrade","Other"];
var SerbiaA =["بلغراد","اخرى"];
var Tajikistan =["Dushanbe", "Khudzhand", "Ordhonikidzeabad", "Other"];
var TajikistanA =["دوشانبي", "كهودزهاند", "اوردهونيكيدزيباد", "اخرى"];
var Gambia =["Banjul","Other"];
var GambiaA =["بانجول","اخرى"];
var Ghana =["Accra", "Tema", "Kumasi", "Other"];
var GhanaA =["اقرا", "تيما", "كوماسي", "اخرى"];
var Guatemala =["Guatemala ", "Chimaltenango", "Coban", "El Progreso", "Escuintla", "Flores", "Jalapa", "Jutiapa", "Mazatenango", "Puerto Barrios", "San Jose", "Other"];
var GuatemalaA =["غواتيمالا سيتي", "شيمالتينانغو", "كوبان", "ايل بروغريسو", "ايسكوينتلا", "فلوريس", "خالابا", "خوتيابا", "ماثاتينانغو", "بويرتو باريوس", "سان خوسيه", "اخرى"]; 
var Guyana =["George Town", "New Amsterdam", "Spring Garden", "Other"];
var GuyanaA =["جورج تاون", "نيو امستردام", "سبرنغ غاردن", "اخرى"]; 
var FrenchGuiana =["Cayenne","Sinnamary","Other"];
var FrenchGuianaA =["كايين","سيناماري","اخرى"];
var FrenchPolynesia =["Papeete/Tahiti", "Atuona", "Hao", "Hereheretue", "Rapa", "Other"]; 
var FrenchPolynesiaA =["بابيتي/تاهيتي", "اتوونا", "هاو", "هيريهيتوي", "رابا", "اخرى"]; 
var Guinea =["Conakry","Boffa","Other"];
var GuineaA =["كوناكري","بوفا","اخرى"];
var GuineaBissau =["Bissau","Other"];
var GuineaBissauA =["بيساو","اخرى"];
var EquatorialGuinea =["Malabo", "Bata", "Luba", "Other"];
var EquatorialGuineaA =["مالابو", "باتا", "لوبا", "اخرى"];
var Vanuatu = ["Port Villa", "Aneityum", "Bauerfield Efate", "Burtonfield Tanna", "Santo Island / Pekoa Airport", "Other"]; 
var VanuatuA = ["بورت فيلا", "انيتايوم", "باورفيلد افيت", "بورتونفيلد تانا", "جزيرةسانتو / مطار بيكوا", "اخرى"]; 
var France =["Paris", "Abbeville", "Auxerre", "Belfort", "Boulogne", "Cambrai", "Chassiron", "Fabregues", "La Calvaire", "Les Grands Vans", "Lorient", "Marseille", "Mondeville", "Orleans", "Saint-Tropez", "Versailles", "Other"];
var FranceA =["باريس", "ابيفيل", "اوكسير", "بيلفورت", "بولون", "كامبراي", "شاسيرون", "فابريغس", "لا كالافاير", "لو غراند فان", "لوريانت", "مارسيل", "مونديفيل", "اورليانس", "ساينت تروبيز", "فيرسايل", "اخرى"]; 
var Philippines =["Manila", "Ambulong", "Basco", "Isabela", "San Jose", "Tayabas", "Tuguegarao", "Rosario", "Dagupan", "Cebu", "Other"]; 
var PhilippinesA =["مانيلا", "امبولونغ", "باسكو", "ايسابيلا", "سان خوسيه", "تاياباس", "توغوي غاراو", "روساريو", "داغوبان", "سيبو", "اخرى"]; 
var Finland =["Helsinki", "Espoo", "Jarvenpaa", "Kevo", "Laitila", "Mynamaki", "Rankki", "Russaro", "Seinajoki", "Vaasa", "Vantaa", "Lahti", "Turku", "Tampere", "Other"]; 
var FinlandA =["هيلسنكي", "اسبو", "جارفنبا", "كيفو", "لايتيلا", "مايناماكي", "رانكي", "روسارو", "سايناجوكي", "فاسا", "فانتا", "لاهتي", "توركو", "تامبيري", "اخرى"]; 
var Venezuela =["Caracas", "Valencia", "Acarigua", "Anaco", "Antimano", "Barinas", "Barrio Del Guafel", "Calabozo", "Carora", "Cumana", "El Tigre", "Upata", "Barquisimeto", "Other"]; 
var VenezuelaA =["كاراكاس", "فالنسيا", "اكاريغوا", "اناكو", "انتيمانو", "باريناس", "باريو ديل غوافيل", "كالاباثو", "كارورا", "كومانا", "ايل تيغري", "اوباتا", "باركيسيميتو", "اخرى"]; 
var Vietnam = ["Hanoi", "An Nhon", "Bac Giang", "Bien Hoa", "Con Son", "Haiphong", "Lang Son", "Hoa Binh", "Hue", "Phu Quoc", "Thai Nguyen", "Truong Sa", "Thanh Pho Ho Chi Minh", "Other"];  
var VietnamA = ["هانوي", "اننهون", "باك غيانغ", "بيين هوا", "كون سون", "هايفونغ", "لانغ سون", "هوا بينه", "هيو", "فو كووك", "تاي نغويين", "ترونغ سا", "ثانه فو هو شي مينه", "اخرى"]; 
var Fiji =["Suva/Fiji", "Matuku", "Nadi", "Nambouwalu", "Nausori", "Ono-I-Lau", "Vanua Mbalavu", "Viwa Islands", "Vunisea", "Yasawa-T-Rara", "Other"]; 
var FijiA =["سوفا / فيجي", "ماتاكو", "نادي", "نامبووالو", "ناوسوري", "اونو اي لاو", "فانوا", "جزر فيوا", "فونيسيا", "ياساوا ت رارا", "اخرى"]; 
var Cyprus =["Nikosia", "Akrotiri", "C.Kromakitis", "Famagusta", "Ktima", "Larnaca", "Limassol", "Paphos", "Polis", "Troodos", "Other"]; 
var CyprusA =["نيقوسيا", "اكروتيري", "س كروماكيتيس", "فاما غوستا", "كتيما", "لارناكا", "ليماسول", "بافوس", "بوليس", "تروودوس", "اخرى"]; 
var Kyrgyzstan =["Bishkek", "Dzhalal-Abad", "Frunze", "Kant", "Naryn", "Talas", "Tian-Shan", "Other"]; 
var KyrgyzstanA =["بشكيك", "دزهلال - اباد", "فرنزي", "كانت", "نارين", "تالاس", "تيان - شان", "اخرى"]; 
var Kazakhstan =["Astana", "Akkuduk", "Alekseevka", "Atyray", "Karaganda", "Panfilov", "Taipak", "Temirtau", "Uralsk", "Zhambyl", "Zlikha", "Other"]; 
var KazakhstanA =["استانا", "اكودوك", "اليكسيفكا", "اتايراي", "كاراغاندا", "بانفيلوف", "تايباك", "تميرتاو", "اورالسك", "زهاميل", "زليخة", "اخرى"]; 
var Croatia =["Zagreb", "Dubrovnik", "Karlovac", "Osijek", "Rijek", "Split", "Other"]; 
var CroatiaA =["زغريب", "دوبروفيتش", "كارلوفاك", "اوسيجيك", "ريجيك", "سبليت", "اخرى"]; 
var Cuba =["Havana", "Baracoa", "Bayamo", "Camaguey", "Cienfuegus", "Holguin", "Las Tunas", "Manzanillo", "Matanzas", "Moa", "Pinar Del Rio", "Other"];
var CubaA =["هافانا", "باراكوا", "بايامو", "كاماغوي", "ثيينفويغوس", "هولغوين", "لاس توناس", "مانثانيو", "ماتانثاس", "موا", "بينار ديل ريو", "اخرى"]; 
var NorthKorea =["PyongYang", "Anju", "Changjin", "Haeju", "Hamhung", "Hyesan", "Kaesong", "Sariwon", "Songnim", "Wonsan", "Huichon", "Other"]; 
var NorthKoreaA =["بيونغ يانغ", "انجو", "تشانغجين", "هاييجو", "هامهونغ", "هاييسان", "كايسونغ", "ساريون", "سونغنيم", "ونسان", "هويشون", "اخرى"]; 
var SouthKorea =["Seoul", "Andong", "Cheju", "Cholwon", "Chupungnyung", "Osan", "Pusan", "Songnam", "Taejon", "Ulchin", "Ulson", "Yangyang", "Other"]; 
var SouthKoreaA =["سيوول", "اندونغ", "شيجو", "شولون", "شوبونغنيونغ", "اوسان", "بوسان", "سونغنام", "تايجون", "اولشين", "اولسون", "يانغيانغ", "اخرى"]; 
var CostaRica =["San Jose", "Alajuela", "Canas", "Cartago", "Chacarita", "Guapiles", "Heredia", "Liberia", "Nicoya", "Puerto Limon", "Puntarenas", "San Isidro Del General", "Turrialba", "Other"]; 
var CostaRicaA =["سان خوسيه", "الاخويلا", "كاناس", "كارتاغو", "تشاكاريتا", "غوابيليس", "هيريديا", "ليبريا", "نيكويا", "بويرتو ليمون", "بونتاريناس", "سان ايسيدرو", "توريالبا", "اخرى"]; 
var Colombia =["Bogota", "Barranquilla", "Barranca-Bermeja", "Girardot", "Puerto Asis", "Soledad", "Tunja", "Medellin", "Cali", "Other"];  
var ColombiaA =["بوغوتا", "بارانكيا", "غيلراردوت", "بويرتو اسيس", "سوليداد", "تونخا", "ميديلين", "كالي", "اخرى"]; 
var Kiribati =["Tarawa","Butaritari","Other"];
var KiribatiA =["تاراوا","بوتاريتاري","اخرى"];
var Kenya =["Nairobi", "Athi River", "Garissa", "Kakamega", "Kericho", "Kisii", "Kisumu", "Kitale", "Malindi", "Meru", "Nakuru", "Other"]; 
var KenyaA =["نايروبي", "اثي ريفر", "غاريسا", "كاكاميغا", "كيريشو", "كيسي", "كيسومو", "كيتالة", "ماليندي", "ميرو", "ناكورو", "اخرى"];  
var Latvia =["Riga","Jelgava","Ogre","Rezekne","Valmiera","Other"];
var LatviaA =["ريغا","جلغافا","اوغري","رزيكني","فلميرا","اخرى"];
var Laos =["Vientiane","Other"];
var LaosA =["فيينتياني","اخرى"];
var Lithuania =["Vilnius", "Kaunas", "Alytus", "Lentvaris", "Nemencine", "Mazeikiai", "Other"]; 
var LithuaniaA =["فيلنيوس", "كاوناس", "الايتوس", "لينتفاريس", "نمنسينة", "مازيكياي", "اخرى"]; 
var Liberia =["Monrovia","Other"];
var LiberiaA =["مونروفيا","اخرى"];
var Madagascar =["Antananarivo", "Andervoranto", "Mahavelona", "Toamasina", "Other"];
var MadagascarA =["انتاناناريفو", "انديرفورانتو", "ماهافيلونا", "توا ماسينا", "اخرى"]; 
var Macedonia =["Skopje", "Berovo", "Bitola", "Demir Kapija", "Gevgelija", "Kriva Palanka", "Lazaropole", "Ohrid", "Prilep", "Stip", "Veles", "Other"];
var MacedoniaA =["سكوبجي", "بيروفو", "بيتولا", "دمير كابيجا", "غفغليجا", "كريفا بلانكا", "لازاروبولة", "اوهريد", "بريليب", "ستيب", "فيليس", "اخرى"]; 
var Malta =["Valletta", "Gozo/Gharb", "Gozo/Qala", "Mellieha", "Other"];
var MaltaA =["فالليتتا", "غوزو / غارب", "غوزو / قالا", "ميليها", "اخرى"]; 
var Mali =["Bamako","Other"];
var MaliA =["بماكو","اخرى"];
var Mongolia =["Ulaan baatar", "Altai", "Baitag", "Bayanbulag", "Bayanhongor", "Erdenemandal", "Hatgal", "Matad", "Tarialan", "Uliastai", "Other"]; 
var MongoliaA =["اولان باتار", "التاي", "بايتاغ", "بايانبولاغ", "بايانهونغور", "اردنيماندال", "هاتغال", "ماتاد", "تاريالان", "اولياستاي", "اخرى"]; 
var Mauritius =["Port Luis", "Agalega", "Plaisance Mauritius", "Rodrigues", "Saint Brandon Saint Raphael", "Vacoas Mauritius", "Other"]; 
var MauritiusA =["بور لويس", "اغاليغا", "بلايسنس موريشيوس", "رودريغوس", "ساينت براندون ساينت رافاييل", "فوكواس موريشيوس", "اخرى"]; 
var Mozambique =["Maputo", "Beira", "Lumba", "Mocambique", "Magincual", "Quelimane", "Other"];
var MozambiqueA =["مابوتو", "بييرا", "لومبا", "موكامبيك", "ماغينكوال", "كويليمان", "اخرى"]; 
var Moldova =["Cisinau", "Hancesti", "Kishinev", "Straseni", "Tiraspol", "Other"];
var MoldovaA =["كيشيناو", "هانكيستي", "كيشينيف", "ستراسيني", "تيراسبول", "اخرى"]; 
var Malawi =["Lilongwe","Dowa","Other"];
var MalawiA =["ليلونغوي","دوا","اخرى"];
var Maldives =["Male","Other"];
var MaldivesA =["مالي","اخرى"];
var Burma =["Naypyidaw", "Mandalay", "Pathein", "Pegu", "Yangon", "Rangoon", "Other"];
var BurmaA =["نايبايداو", "مندلاي", "باثيين", "بيغو", "يانغون", "رانغوون", "اخرى"]; 
var Namibia =["Windhoek", "Hentiesbaai", "Keetmanshoop", "Luderitz Diaz Point", "Swakopmund", "Walvis Bay", "Other"]; 
var NamibiaA =["وندهويك", "هيينتيسباي", "كيتمانشووب", "لوديريتز دياز بوينت", "سواكوبموند", "والفيس باي", "اخرى"]; 
var Nauru =["Yaren","Other"];
var NauruA =["يارين","اخرى"];
var Niger =["Niamey" , "Agadez" , "Assaouas" , "Bilma" , "Diffa" , "Magaria" , "Maine-Soroa" , "Maradi" , "Tahoua" , "Tillabery" , "Other"];
var NigerA =["نيامي", "اغادز", "اساواس", "بيلما", "ديفا", "ماغاريا", "ماين - سوروا", "مارادي", "تاهوا", "تيلابيري", "اخرى"]; 
var Nigeria =["Abuja", "Abeukuta", "Aba", "Birnin Kebbi", "Calabar", "Dange", "Enugu", "Gwarzo", "Ibadan", "Kware", "Mushin", "Lagos", "Other"];
var NigeriaA =["ابوجا", "ابيوكوتا", "ابا", "بيرنين كيبي", "كالابار", "دانغي", "انوغو", "غوارزو", "ايبادان", "كواري", "موشين", "لاغوس", "اخرى"]; 
var Nicaragua =["Managua", "BlueFields", "Chinandega", "Granada", "Jinotega", "Puerto Cabezas", "Rivas", "Tipitapa", "Other"]; 
var NicaraguaA =["ماناغوا", "بلوفيلدس", "تشينانديغا", "غرانادا", "جينوتيغا", "بويرتو كابيثاس", "ريفاس", "تيبيتابا", "اخرى"]; 
var Haiti =["Port Au Prince", "Gonaives", "Les Cayes", "Saint-Marc", "Petionville", "Other"]; 
var HaitiA =["بورت او برينس", "غونايفس", "لو كاي", "ساينت مارك", "بيتيون فيل", "اخرى"]; 
var Honduras =["Tegucigalpa", "Amapala", "Catacamas", "Guanja", "La Esperanza", "Nacaome", "San Miguel", "Tela", "Yoro", "San Pedro Sula", "Other"];
var HondurasA =["تيغوسيغالبا", "امابالا", "كاتاكاماس", "خوانخا", "لا اسبرنزا", "ناكاومة", "سان ميغيل", "تيلا", "يورو", "سان بيدرو سولا", "اخرى"]; 
var Hungary =["Budapest", "Cegled", "Debrecen", "Dunaujvaros", "Gyor", "Miskolc", "Nagykanizsa", "Puspokladany", "Tatabanya", "Vac", "Szeged", "Other"];
var HungaryA =["بودابست", "سيغليد", "ديبريسين", "دوناوخفاروس", "غيور", "ميسكلوش", "ناغيكانيزسا", "بوسبوكلاداني", "تاتابانيا", "فاك", "سزيغيد", "اخرى"]; 
var Yugoslavia =["Belgrade", "Crni Vrh", "Cuprija", "Kikinda", "Loznica", "Kraljevo", "Negotin", "Nis", "Palic", "Pristina", "Ruma", "Niksic", "Other"]; 
var YugoslaviaA =["بلغراد", "يسرني فره", "كوبريجا", "كيكيندا", "لوزنيكا", "كرالجيفو", "نيغوتين", "نيس", "باليك", "بريستينا", "روما", "نيكسيش", "اخرى"]
var Brunei =["Bandar Seri begwan", "Brunei Airport", "Kuala Belait", "Other"];
var BruneiA =["بندر سري بغوان", "مطار بروناي", "كوالا بيلايت", "اخرى"]; 
var Spain =  ["Madrid", "Barcelona", "Albacete", "Alcobendas", "Alicante", "Armilla", "Bilbao", "Cuenca", "Getafe", "La Guardia", "Manzaneda", "Preigo", "Santander", "Valladolid", "Granada", "Valencia", "Other"];
var SpainA =  ["مدريد", "برشلونة", "الباثيتي", "الكوبينداس", "اليكانتي", "ارميا", "بيلباو", "كوينكا", "خيتافي", "لا غوارديا", "مانثانيدا", "برييغو", "سانتاندير", "فايادوليد", "غرناطة", "فالنسيا", "اخرى"]; 
var Australia =["Canberra", "Brisbane", "Adelaide", "Derby", "Finley", "Georgetown", "Norseman", "Melbourne", "Sydney", "Other"]; 
var AustraliaA =["كانبيرا", "بريسبين", "ادلييد", "ديربي", "فينلي", "جورج تاون", "نورسيمان", "ملبورن", "سيدني", "اخرى"];
var Bahamas =["Nassau", "Andros Town", "Free port", "George Town", "Governors Harbour", "Matthew Town", "Other"];   
var BahamasA =["ناسساو", "اندروس تاون", "فري بورت", "جورج تاون", "غفرنرس هاربور", "ماثيو تاون", "اخرى"];
var UnitedKingdom =["London", "Abbotsbury", "Aberdeen", "Aberpoth", "Abingdon", "Altnaharra", "Ashford", "Bala", "Banbury", "Barry", "Basingstoke", "Boulmer", "Buxton", "Cambridge", "Chivenor", "Bright stone", "Brighton", "Clacton", "Clybebank", "Coleraine", "Copplestone", "Colwyn Bay", "Dyce", "Durham", "Grimsby", "Kinloss", "Marham", "Sunderland", "Other"];
var UnitedKingdomA =["لندن", "ابوتسبيري", "ابردين", "ابربوث", "ابينغدون", "التناهرا", "اشفورد", "بالا", "بانبوري", "باري", "باسيتغستوك", "بولمر", "بوكستون", "كامبردج", "تشيفينور", "برايت ستون", "برايتون", "كلاكتون", "كلايببانك", "كولراين", "كوبل ستون", "كولوين باي", "ديس", "دورهام", "غريمسبي", "كينلوس", "مرهام", "سندرلاند", "اخرى"]; 
var CaymanIslands = ["George Town","Other"];
var CaymanIslandsA =["جورج تاون","اخرى"];
var Denmark = ["Copenhagen", "Odense", "Abenra", "Alborg", "Augustenborg", "Bramming", "Grimstrup", "Ronne", "Sandvig", "Tastrup", "Thisted", "Verstervig", "Dronninglund", "Roskilde", "Other"];  
var DenmarkA = ["كوبنهاغن", "اودينسي", "ابينرا", "البورغ", "اوغوستنبورغ", "برامنغ", "غريمستروب", "روني", "ساندفيغ", "تاستروب", "ثيستيد", "فيرسترفيغ", "درونينغلاند", "روسكيلد", "اخرى"]; 
var Sweden = ["Stockholm", "Abisko", "Boras", "Gavle", "Kuggoren", "Soraker", "Vasteras", "Visby", "Umea", "Solna", "Sodertalje", "Goteborg", "Malmo", "Other"];
var SwedenA =["ستوكهولم", "ابيسكو", "بوراس", "غافلي", "كوغورين", "سوراكير", "فاستيراس", "فيسبي", "اوميا", "سولنا", "سوديرتالجي", "غوتيبرغ", "مالمو", "اخرى"]; 
var Norway =["Oslo", "Bronnoysund", "Leknes", "Roros", "Sandvika", "Tonsberg", "Tynset", "Utsira Fyr", "Vangsnes", "Sogndal", "Ulvik", "Slemmestad", "Other"];  
var NorwayA =["اوسلو", "برونويسوند", "ليكنيس", "روروس", "ساندفيكا", "تونسبيرغ", "تاينسيت", "اوتسيرا فير", "فانغسنيس", "سوغندال", "اولفيك", "سليمستاد", "اخرى"];  
var AntiguaandBarbuda = ["Saint Johns","Codrington","Other"];
var AntiguaandBarbudaA = ["سانت جونس","كودرينغتون","اخرى"];
var PapuaNewGuinea = ["Port Moresby", "Kerema", "Kikori", "Morobe", "Samarai", "Other"];
var PapuaNewGuineaA =["بورت مورسبي", "كيريما", "كيكوري", "موروبي", "ساماراي", "اخرى"];
var Belarus = ["Minsk", "Baranovici", "Bobruysr", "Borisov", "Brest", "Dobrush", "Grodno", "Lida", "Lyntupy", "Mogilev", "Other"];  
var BelarusA = ["مينسك", "بارانوفيشي", "بابرويسر", "بوريسوف", "بريست", "دوبرش", "غرودنو", "ليدا", "لينتوبي", "موغيليف", "اخرى"]; 
var Barbados = ["Bridgetown","Other"];
var BarbadosA = ["بريدجتاون","اخرى"];
var Belgium =["Brussels", "Anderlecht", "Ans", "Aywaille", "Beauvechain", "Charleroi", "Dendermonde", "Elsenborn", "Florennes", "Gent", "Antwerp", "Seraing", "Other"];  
var BelgiumA =["بروسيلس", "اندرليخت", "انس", "ايويلة", "بيفيتشاين", "تشارليروي", "دندر موندي", "السن بورن", "فلورينيس", "غنت", "انتويرب", "سيراينغ", "اخرى"];  
var Belize = ["Belmopan", "Belize ", "Corozal", "Dangriga", "Turneffe Island", "Other"];
var BelizeA =["بلموبان", "بليز سيتي", "كوروزال", "دنغريغا", "جزيرة تورنيف", "اخرى"]; 
var Tuvalu = ["Funafuti","Other"];
var TuvaluA =["فونافوتي","اخرى"];
var Boyaca = ["Tunja","Other"];
var BoyacaA =["تونجا","اخرى"];
var Jamaica = ["Kingston", "Falmouth", "Montego Bay", "Morant Bay", "Ocho Rios", "Port Royal", "Reading", "Spanish Town", "Other"];
var JamaicaA =["كنجستن", "فالماوث", "مونتيغو باي", "مورانت باي", "اوتشو ريوس", "بورت رويال", "ريدينغ", "سبانيش تاون", "اخرى"]; 
var Grenada = ["St.Georges","Other"];
var GrenadaA =["سانت جورجس","اخرى"];
var SolomonIslands = ["Honiara","Auki","Munda","Other"];
var SolomonIslandsA =["هونيارا","اوكي","موندا","اخرى"];
var SaintVincentandtheGrenadines = ["Kingstown","Other"];
var SaintVincentandtheGrenadinesA =["كنجستاون","اخرى"];
var SaintLucia = ["Castries", "Dennery", "Micoud", "Vieux Fox", "Other"]; 
var SaintLuciaA = ["كاستريس", "دينيري", "ميكود", "فيو فوكس", "اخرى"];
var SaintKittsandNevis =["Basseterre","Other"];
var SaintKittsandNevisA =["باسيتيرري","اخرى"]; 
var Cambodia = ["Phnum Penh","Other"];
var CambodiaA =["فنوم بينيه","اخرى"];
var Canada = ["Ottawa", "Ahousat", "Albertville", "Belmont", "Cambridge", "Charlottetown", "Coronation", "Douglastown", "Toronto", "Calgary", "Montreal", "Burlington", "Mont-Royal", "Other"];
var CanadaA =["اوتاوا", "اهوسات", "البرتفيل", "بيلمونت", "كامبردج", "تشارلوت تاون", "كورونيشن", "دوجلس تاون", "تورونتو", "كالغاري", "مونتريال", "بورلينغتون", "مونت رويال", "اخرى"]; 
var Luxembourg = ["Luxembourg", "Dudelange" ,"Esch-sur-Alzette" ,"Mersch" ,"Other"]; 
var LuxembourgA =["لوكسمبورغ" ,"دوديلانغ", "ايش سور الزيتي", "ميرش", "اخرى"]; 
var Lesotho = ["Maseru", "Morija", "Teyateyaneng", "Other"];
var LesothoA =["ماسيرو", "موريخا", "تياتيانينغ", "اخرى"];  
var Malaysia = ["Kuala Lumpur", "Batu Pahat", "Bintulu", "Johor Bahru", "Kajang", "Kuantan", "Langkawi", "Melaka", "Pekan", "Sandakan", "Sitiawan", "Ipoh", "Other"]; 
var MalaysiaA =["كوالا لامبور", "باتو باهات", "بينتولو", "جوهور باهرو", "كاجانغ", "كوانتان", "لانغكاوي", "ميلاكا", "بيكان", "سانداكان", "سيتياوان", "ايبوه", "اخرى"]; 
var Nepal = ["Kathmendu","Bhaktapur","Other"];
var NepalA =["كثمندو","بهاكتابور","اخرى"];
var NewZealand = ["Wellington", "Allanton", "Blenheim", "Eastbourne", "Hamilton", "Mosgiel", "Riccarton", "Waihola", "Waiouru", "Waipara", "Auckland", "Christchurch", "Lowet Hutt", "Other"];
var NewZealandA = ["ولينغتون", "الانتون", "بلينهايم", "ايستبورن", "هاملتون", "موسغييل", "ريكارتون", "وايهولا", "وايورو", "وايبارا", "اوكلاند", "كريست تشيرش", "لور هت", "اخرى"]; 
var Netherlands = ["Amsterdam", "Alkmaar", "Assen", "Delft", "Haarlem", "Hoogeveen", "Leiden", "Utrecht", "Twenthe", "Wassenaar", "Rotterdam", "The Hague", "Other"];
var NetherlandsA =["امستردام", "الكمار", "اسين", "ديلفت", "هاارلم", "هوغيفين", "لايدن", "اوترخت", "توينث", "واسينار", "روتردام", "ذا هاغ", "اخرى"]; 
var NetherlandsAntilles = ["Willemstad", "Curacao Island", "Kralendijk", "Saint Eustatius", "Other"]; 
var NetherlandsAntillesA =["وايلم ستاد", "جزيرة كوراكاو", "كرالينديجك", "ساينت اوستيوس", "اخرى"]; 
var Thailand = ["Bangkok", "Ban Phai", "Hat Yai", "Nakhon Pathom", "Thong Pha Phum", "Suphan Buri", "Udon Thani", "Nan", "Phuket", "Samut Prakan", "Phitsanulok", "Chonburi", "Other"]; 
var ThailandA =["بانكوك", "بان بهاي", "هات ياي", "ناكهون باتهوم", "ثونغ بها بهوم", "سوبهان بوري", "اودون تهاني", "نان", "بهوكيت", "ساموت براكان", "فيتاسانولاك", "شونبوري", "اخرى"]; 
var CookIslands = ["Avarua","Rarotonga","Other"];
var CookIslandsA =["افاروا","راروتونغا","اخرى"];
var DominicanRepublic = ["Santo Domingo De Guzman", "Bani", "Barahona", "Bavaro", "Bonao", "Ceberete", "Isla Saona", "Monte Cristi", "San Cristobal", "Other"]; 
var DominicanRepublicA = ["سانتو دومينغو دي غوزمان", "باني", "باراهونا", "بافارو", "بوناو", "ثيبيريتي", "ايسلا ساونا", "مونتي كريستي", "سان كريستوبال", "اخرى"];  
var FalklandIslands = ["Stanley","Mount Pleasant Airport","Other"];
var FalklandIslandsA = ["ستانلي","مطار ماونت بليزينت","اخرى"];
var Gibraltar = ["Gibraltar","Other"];
var GibraltarA = ["جبل طارق","اخرى"];
var Greenland = ["Nuuk", "Angmagssalik", "Frederikshaab", "Godthab", "Julianehab", "Kangerlussuaq", "Narsarsuaq", "Prins Christian Sund", "Other"];
var GreenlandA = ["نووك", "انغماغساليك", "فردريكشاب", "غودثاب", "جوليانيهاب", "كانغيرلوسواك", "نارسارسواك", "برينس كريستيان سوند", "اخرى"]; 
var Guadeloupe = ["Basse - terre", "Les Abymes", "Petit-Bourg", "Pointe-a-Pitre", "Port-Louis", "Saint Martin Islands", "Other"]; 
var GuadeloupeA = ["باسي - تير", "لو ابيم", "بيتيت - بورغ", "بوينت -ابيتر", "بورت لويس", "جزر ساينت مارتن", "اخرى"]; 
var Mali = ["Bamako", "Gao", "Kayes", "Mopti", "Segou", "Tessalit", "Timbuktu", "Other"]; 
var MaliA = ["باماكو", "غاو", "كايس", "موبتي", "سيغو", "تيساليت", "تيمبوكتو", "اخرى"]; 
var IsleofMan = ["Douglas", "Ronaldsway Airport", "Point of Ayre", "Other"];
var IsleofManA = ["دوغلاس", "مطار رونالدسواي", "بوينت اوف ايري", "اخرى"]; 
var Martinique = ["Fort-de-France",  "Le Marin",  "Saint-Joseph",  "Saint Pierre",  "Other"];
var MartiniqueA =["فورت دي فرانس",  "لو مارين",  "ساينت جوزيف",  "ساينت بيير",  "اخرى"];  
var Mayotte = ["Mamoudzou","Dzaoudzi / Pamanzi","Other"];
var MayotteA =["مامودزو","دزاودزي / بامانزي","اخرى"];
var Monaco = ["Monaco","Monte Carlo","Other"];
var MonacoA = ["موناكو","مونتي كارلو","اخرى"];
var NewCaledonia =   ["Noumea", "Ile Loop Chesterfield", "Ile Surprise", "Koumac Nlle-Caledonie", "Other"];
var NewCaledoniaA =   ["نوميا", "ايلي لوب تشسترفيلد", "ايلي سوربرايس", "كوماك نلي كاليدونية", "اخرى"]; 
var Reunion = ["Saint-Denis / Gillot", "Serge - Frolow Ile Tromlin", "Other"];
var ReunionA = ["ساينت دنيس / غيلوت", "سيرغي/ فرولو ايلي تروملين", "اخرى"]; 
var SaintHelena = ["James Town","Ascension Island","Other"];
var SaintHelenaA = ["جيمس تاون","جزيرة اسثنيون","اخرى"];
var SouthGeorgiaAndTheSouthSandwichIslands =["King Edward Point","South Georgia","Other"];
var SouthGeorgiaAndTheSouthSandwichIslandsA =["كنج ادوارد بوينت","جنوب جيورجيا","اخرى"];
var Swaziland = ["Mbabne","Other"];
var SwazilandA = ["مبابني","اخرى"]
var Tonga = ["Nukualofa","Other"];
var TongaA =["نوكوالوفا","اخرى"];
var TurksandCaicosIslands = ["Grand Turk","Other"];
var TurksandCaicosIslandsA = ["جراند ترك","اخرى"];
var WesternSahara =   ["La Ayoune", "Edchera", "La Guera", "Lemsid", "Villa Cisneros", "Other"];
var WesternSaharaA =     ["العيون", "ادشيرا", "لا غيرا", "ليمسيد", "فييا ثيسنيروس", "اخرى"];  



 var Cities = new Array();
 var CitiesA = new Array();
 var hasCity = true;
//alert(country);
country = parseInt(country.replace(/ /ig,""));
 switch(country) {
case 1 : Cities = Ethiopia; CitiesA = EthiopiaA;
break;
case 2: Cities = Iran;CitiesA = IranA;
break;
case 3 : Cities = Eritrea; CitiesA =  EritreaA;
break;
case 4 : Cities = Jordan; CitiesA =  JordanA;
break;
case 5 : Cities = UnitedArabEmirates; CitiesA =  UnitedArabEmiratesA;
break;
case 6 : Cities = Bahrain; CitiesA =  BahrainA;
break;
case 7 : Cities = Algeria; CitiesA =  AlgeriaA;
break;
case 8 : Cities = SaudiArabia; CitiesA =  SaudiArabiaA;
break;
case 9 : Cities = Sudan; CitiesA =  SudanA;
break;
case 10 : Cities = Somalia; CitiesA =  SomaliaA;
break;
case 11 : Cities = Iraq; CitiesA = IraqA;
break;
case 12 : Cities = Kuwait; CitiesA =  KuwaitA;
break;
case 13 : Cities = Morocco; CitiesA =  MoroccoA;
break;
case 14 : Cities = Yemen; CitiesA =  YemenA;
break;
case 15 : Cities = Tunisia; CitiesA =  TunisiaA;
break;
case 16 : Cities = Djibouti; CitiesA =  DjiboutiA;
break;
case 17 : Cities = Syria; CitiesA =  SyriaA;
break;
case 18 : Cities = Oman; CitiesA =  OmanA;
break;
case 19 : Cities = Palestine; CitiesA =  PalestineA;
break;
case 20 : Cities = Qatar; CitiesA =  QatarA;
break;
case 21 : Cities = Lebanon; CitiesA =  LebanonA;
break;
case 22 : Cities = Libya; CitiesA =  LibyaA;
break;
case 23 : Cities = Egypt; CitiesA =  EgyptA;
break;
case 24 : Cities = Mauritania; CitiesA =  MauritaniaA;
break;
case 25 : Cities = Afghanistan; CitiesA =  AfghanistanA;
break;
case 26 : Cities = Albania; CitiesA =  AlbaniaA;
break;
case 27 : Cities = Andorra; CitiesA =  AndorraA;
break;
case 28 : Cities = Angola; CitiesA =  AngolaA;
break;
case 29 : Cities = Anguilla; CitiesA =  AnguillaA;
break;
case 30 : Cities = Antarctica; CitiesA =  AntarcticaA;
break;
case 31 : Cities = AntiguaandBarbuda; CitiesA =  AntiguaandBarbudaA;
break;
case 32 : Cities = Argentina; CitiesA =  ArgentinaA;
break;
case 33 : Cities = Armenia; CitiesA =  ArmeniaA;
break;
case 34 : Cities = Aruba; CitiesA =  ArubaA;
break;
case 35 : Cities = Australia; CitiesA =  AustraliaA;
break;
case 36 : Cities = Austria; CitiesA =  AustriaA;
break;
case 37 : Cities = Azerbaijan; CitiesA =  AzerbaijanA;
break;
case 38 : Cities = Bahamas; CitiesA =  BahamasA;
break;
case 39 : Cities = Bangladesh; CitiesA =  BangladeshA;
break;
case 40 : Cities = Barbados; CitiesA =  BarbadosA;
break;
case 41 : Cities = Belarus; CitiesA =  BelarusA;
break;
case 42 : Cities = Belgium; CitiesA =  BelgiumA;
break;
case 43 : Cities = Belize; CitiesA =  BelizeA;
break;
case 44 : Cities = Benin; CitiesA =  BeninA;
break;
case 45 : Cities = Bermuda; CitiesA =  BermudaA;
break;
case 46 : Cities = Bhutan; CitiesA = BhutanA;
break;
case 47 : Cities = Bolivia; CitiesA =  BoliviaA;
break;
case 48 : Cities = BosniaandHerzegovina; CitiesA =  BosniaandHerzegovinaA;
break;
case 49 : Cities = Botswana; CitiesA =  BotswanaA;
break;
case 50 : Cities = Boyaca; CitiesA =  BoyacaA;
break;
case 51 : Cities = Brazil; CitiesA =  BrazilA;
break;
case 52 : Cities = BritishVirginIslands; CitiesA = BritishVirginIslandsA;
break;
case 53 : Cities = Brunei; CitiesA =  BruneiA;
break;
case 54 : Cities = Bulgaria; CitiesA =  BulgariaA;
break;
case 55 : Cities = BurkinaFaso; CitiesA =  BurkinaFasoA;
break;
case 56 : Cities = Burma; CitiesA =  BurmaA;
break;
case 57 : Cities = Burundi; CitiesA =  BurundiA;
break;
case 58 : Cities = Cambodia; CitiesA =  CambodiaA;
break;
case 59 : Cities = Cameroon; CitiesA =  CameroonA;
break;
case 60 : Cities = Canada; CitiesA =  CanadaA;
break;
case 61 : Cities = CapeVerde; CitiesA =  CapeVerdeA;
break;
case 62 : Cities = CaymanIslands; CitiesA =  CaymanIslandsA;
break;
case 63 : Cities = CentralAfricanRepublic; CitiesA =  CentralAfricanRepublicA;
break;
case 64 : Cities = Chad; CitiesA =  ChadA;
break;
case 65 : Cities = Chile; CitiesA =  ChileA;
break;
case 66 : Cities = ChristmasIsland; CitiesA = ChristmasIslandA;
break;
case 67 : Cities = Colombia; CitiesA =  ColombiaA;
break;
case 68 : Cities = Comoros; CitiesA =  ComorosA;
break;
case 69 : Cities = Congo; CitiesA =  CongoA;
break;
case 70 : Cities = CookIslands; CitiesA =  CookIslandsA;
break;
case 71 : Cities = CostaRica; CitiesA =  CostaRicaA;
break;
case 72 : Cities = CotedIvoire; CitiesA =  CotedIvoireA;
break;
case 73 : Cities = Croatia; CitiesA =  CroatiaA;
break;
case 74 : Cities = Cuba; CitiesA =  CubaA;
break;
case 75 : Cities = Cyprus; CitiesA =  CyprusA;
break;
case 76 : Cities = CzechRepublic; CitiesA =  CzechRepublicA;
break;
case 77 : Cities = DemocraticCongo; CitiesA =  DemocraticCongoA;
break;
case 78 : Cities = Denmark; CitiesA =  DenmarkA;
break;
case 79 : Cities = Dominica; CitiesA =  DominicaA;
break;
case 80 : Cities = DominicanRepublic; CitiesA =  DominicanRepublicA;
break;
case 81 : Cities = EastTimor; CitiesA =  EastTimorA;
break;
case 82 : Cities = Ecuador; CitiesA =  EcuadorA;
break;
case 83 : Cities = ElSalvador; CitiesA =  ElSalvadorA;
break;
case 84 : Cities = EquatorialGuinea; CitiesA =  EquatorialGuineaA;
break;
case 85 : Cities = Estonia; CitiesA =  EstoniaA;
break;
case 86 : Cities = FalklandIslands; CitiesA =  FalklandIslandsA;
break;
case 87 : Cities = Fiji; CitiesA =  FijiA;
break;
case 88 : Cities = Finland; CitiesA =  FinlandA;
break;
case 89 : Cities = France; CitiesA = FranceA;
break;
case 90 : Cities = FrenchGuiana; CitiesA =  FrenchGuianaA;
break;
case 91 : Cities = FrenchPolynesia; CitiesA =  FrenchPolynesiaA;
break;
case 92 : Cities = Gabon; CitiesA =  GabonA;
break;
case 93 : Cities = Gambia; CitiesA =  GambiaA;
break;
case 94 : Cities = Georgia; CitiesA =  GeorgiaA;
break;
case 95 : Cities = Germany; CitiesA = GermanyA;
break;
case 96 : Cities = Ghana; CitiesA = GhanaA;
break;
case 97 : Cities = Gibraltar; CitiesA =  GibraltarA;
break;
case 98 : Cities = Greece; CitiesA =  GreeceA;
break;
case 99 : Cities = Greenland; CitiesA =  GreenlandA;
break;
case 100 : Cities = Grenada; CitiesA =  GrenadaA;
break;
case 101 : Cities = Guadeloupe; CitiesA =  GuadeloupeA;
break;
case 102 : Cities = Guatemala; CitiesA = GuatemalaA;
 break;
case 103 : Cities = Guinea; CitiesA = GuineaA;
break;
case 104 : Cities = GuineaBissau; CitiesA = GuineaBissauA;
break;
case 105 : Cities = Guyana; CitiesA =  GuyanaA;
break;
case 106 : Cities = Haiti; CitiesA =  HaitiA;
break;
case 107 : Cities = Honduras; CitiesA =  HondurasA;
break;
case 108 : Cities = Hungary; CitiesA =  HungaryA;
break;
case 109 : Cities = Iceland; CitiesA =  IcelandA;
break;
case 110 : Cities = India; CitiesA = IndiaA;
break;
case 111 : Cities = Indonesia; CitiesA =  IndonesiaA;
break;
case 112 : Cities = Ireland; CitiesA =  IrelandA;
break;
case 113 : Cities = IsleofMan; CitiesA =  IsleofManA;
break;
case 114 : Cities = Italy; CitiesA =  ItalyA;
break;
case 115 : Cities = Jamaica; CitiesA = JamaicaA;
break;
case 116 : Cities = Japan; CitiesA =  JapanA;
break;
case 117 : Cities = Kazakhstan; CitiesA =  KazakhstanA;
break;
case 118 : Cities = Kenya; CitiesA =  KenyaA;
break;
case 119 : Cities = Kiribati; CitiesA =  KiribatiA;
break;
case 120 : Cities = Kyrgyzstan; CitiesA =  KyrgyzstanA;
break;
case 121 : Cities = Laos; CitiesA =  LaosA;
break;
case 122 : Cities = Latvia; CitiesA =  LatviaA;
break;
case 123 : Cities = Lesotho; CitiesA =  LesothoA;
break;
case 124 : Cities = Liberia; CitiesA =  LiberiaA;
break;
case 125 : Cities = Liechtenstein; CitiesA = LiechtensteinA;
break;
case 126 : Cities = Lithuania; CitiesA =  LithuaniaA;
break;
case 127 : Cities = Luxembourg; CitiesA =  LuxembourgA;
break;
case 128 : Cities = Macedonia; CitiesA =  MacedoniaA;
break;
case 129 : Cities = Madagascar; CitiesA =  MadagascarA;
break;
case 130 : Cities = Malawi; CitiesA = MalawiA;
break;
case 131 : Cities = Malaysia; CitiesA =  MalaysiaA;
break;
case 132 : Cities = Maldives; CitiesA = MaldivesA;
break;
case 133 : Cities = Mali; CitiesA =  MaliA;
break;
case 134 : Cities = Malta; CitiesA = MaltaA;
break;
case 135 : Cities = MarshallIslands; CitiesA =  MarshallIslandsA;
break;
case 136 : Cities = Martinique; CitiesA =  MartiniqueA;
break;
case 137 : Cities = Mauritius; CitiesA =  MauritiusA;
break;
case 138 : Cities = Mayotte; CitiesA =  MayotteA;
break;
case 139 : Cities = Mexico; CitiesA =  MexicoA;
break;
case 140 : Cities = Moldova; CitiesA =  MoldovaA;
break;
case 141 : Cities = Monaco; CitiesA = MonacoA;
break;
case 142 : Cities = Mongolia; CitiesA =  MongoliaA;
break;
case 143 : Cities = Montenegro; CitiesA =  MontenegroA;
break;
case 144 : Cities = Mozambique; CitiesA =  MozambiqueA;
break;
case 145 : Cities = Namibia; CitiesA = NamibiaA;
break;
case 146 : Cities = Nauru; CitiesA =  NauruA;
break;
case 147 : Cities = Nepal; CitiesA =  NepalA;
break;
case 148 : Cities = Netherlands; CitiesA =  NetherlandsA;
break;
case 149 : Cities = NetherlandsAntilles; CitiesA =  NetherlandsAntillesA;
break;
case 150 : Cities = NewCaledonia; CitiesA =  NewCaledoniaA;
break;
case 151 : Cities = NewZealand; CitiesA =  NewZealandA;
break;
case 152 : Cities = Nicaragua; CitiesA =  NicaraguaA;
break;
case 153 : Cities = Niger; CitiesA =  NigerA;
break;
case 154 : Cities = Nigeria; CitiesA =  NigeriaA;
break;
case 155 : Cities = NorthKorea; CitiesA =  NorthKoreaA;
break;
case 156 : Cities = Norway; CitiesA =  NorwayA;
break;
case 157 : Cities = Pakistan; CitiesA =  PakistanA;
break;
case 158 : Cities = Palau; CitiesA =  PalauA;
break;
case 159 : Cities = Panama; CitiesA =  PanamaA;
break;
case 160 : Cities = PapuaNewGuinea; CitiesA =  PapuaNewGuineaA;
break;
case 161 : Cities = Paraguay; CitiesA =  ParaguayA;
break;
case 162 : Cities = Peru; CitiesA =  PeruA;
break;
case 163 : Cities = Philippines; CitiesA = PhilippinesA;
break;
case 164 : Cities = Poland; CitiesA =  PolandA;
break;
case 165 : Cities = Portugal; CitiesA = PortugalA;
break;
case 166 : Cities = RepublicOfChina; CitiesA =  RepublicOfChinaA;
break;
case 167 : Cities = Reunion; CitiesA =  ReunionA;
break;
case 168 : Cities = Romania; CitiesA =  RomaniaA;
break;
case 169 : Cities = Russia; CitiesA =  RussiaA;
break;
case 170 : Cities = Rwanda; CitiesA =  RwandaA;
break;
case 171 : Cities = SaintHelena; CitiesA =  SaintHelenaA;
break;
case 172 : Cities = SaintKittsandNevis; CitiesA =  SaintKittsandNevisA;
break;
case 173 : Cities = SaintLucia; CitiesA =  SaintLuciaA;
break;
case 174 : Cities = SaintVincentandtheGrenadines; CitiesA =  SaintVincentandtheGrenadinesA;
break;
case 175 : Cities = Samoa; CitiesA =  SamoaA;
break;
case 176 : Cities = SanMarino; CitiesA =  SanMarinoA;
break;
case 177 : Cities = SaoTomeAndPrincipe; CitiesA =  SaoTomeAndPrincipeA;
break;
case 178 : Cities = Senegal; CitiesA =  SenegalA;
break;
case 179 : Cities = Serbia; CitiesA =  SerbiaA;
break;
case 180 : Cities = Seychelles; CitiesA =  SeychellesA;
break;
case 181 : Cities = SierraLeone; CitiesA =  SierraLeoneA;
break;
case 182 : Cities = Singapore; CitiesA = SingaporeA;
break;
case 183 : Cities = Slovakia; CitiesA =  SlovakiaA;
break;
case 184 : Cities = Slovenia; CitiesA =  SloveniaA;
break;
case 185 : Cities = SolomonIslands; CitiesA =  SolomonIslandsA;
break;
case 186 : Cities = SouthAfrica; CitiesA =  SouthAfricaA;
break;
case 187 : Cities = SouthGeorgiaAndTheSouthSandwichIslands; CitiesA =  SouthGeorgiaAndTheSouthSandwichIslandsA;
break;
case 188 : Cities = SouthKorea; CitiesA =  SouthKoreaA;
break;
case 189 : Cities = Spain; CitiesA =  SpainA;
break;
case 190 : Cities = SriLanka; CitiesA =  SriLankaA;
break;
case 191 : Cities = Suriname; CitiesA =  SurinameA;
break;
case 192 : Cities = Swaziland; CitiesA =  SwazilandA;
break;
case 193 : Cities = Sweden; CitiesA =  SwedenA;
break;
case 194 : Cities = Switzerland; CitiesA =  SwitzerlandA;
break;
case 195 : Cities = Taiwan; CitiesA =  TaiwanA;
break;
case 196 : Cities = Tajikistan; CitiesA =  TajikistanA;
break;
case 197 : Cities = Tanzania; CitiesA = TanzaniaA;
break;
case 198 : Cities = Thailand; CitiesA =  ThailandA;
break;
case 199 : Cities = Togo; CitiesA =  TogoA;
break;
case 200 : Cities = Tonga; CitiesA =  TongaA;
break;
case 201 : Cities = TrinidadandTobago; CitiesA =  TrinidadandTobagoA;
break;
case 202 : Cities = Turkey; CitiesA =  TurkeyA;
break;
case 203 : Cities = Turkmenistan; CitiesA =  TurkmenistanA;
break;
case 204 : Cities = TurksandCaicosIslands; CitiesA =  TurksandCaicosIslandsA;
break;
case 205 : Cities = Tuvalu; CitiesA =  TuvaluA;
break;
case 206 : Cities = Uganda; CitiesA =  UgandaA;
break;
case 207 : Cities = Ukraine; CitiesA =  UkraineA;
break;
case 208 : Cities = UnitedKingdom; CitiesA =  UnitedKingdomA;
break;
case 209 : Cities = UnitedStates; CitiesA =  UnitedStatesA;
break;
case 210 : Cities = Uruguay; CitiesA =  UruguayA;
break;
case 211 : Cities = Uzbekistan; CitiesA =  UzbekistanA;
break;
case 212 : Cities = Vanuatu; CitiesA =  VanuatuA;
break;
case 213 : Cities = Venezuela; CitiesA =  VenezuelaA;
break;
case 214 : Cities = Vietnam; CitiesA =  VietnamA;
break;
case 215 : Cities = WesternSahara; CitiesA =  WesternSaharaA;
break;
case 216 : Cities = Yugoslavia; CitiesA =  YugoslaviaA;
break;
case 217 : Cities = Zambia; CitiesA =  ZambiaA;
break;
case 218 : Cities = Zimbabwe; CitiesA =  ZimbabweA;
break;
default : hasCity = false;
break;
 }



 if(hasCity) {
 var oCitySpan = document.createElement('span');
 oCitySpan.id = "city_span";
 var oSelect = document.createElement('select');
 oSelect.name = "city_select";
 oSelect.id = "city_select";
 oSelect.align = "texttop";
 oSelect.className = "TXT";
 for(i = 0; i < Cities.length; i++) {
 var oOption = document.createElement('option');
 oOption.setAttribute('value', CitiesA[i]);
 oOption.appendChild(document.createTextNode(CitiesA[i]));
 oSelect.appendChild(oOption);
 }
 oCitySpan.appendChild(document.createTextNode(' المدينة: '));
 oCitySpan.appendChild(oSelect);
document.getElementById("csel_field8").parentNode.appendChild(oCitySpan);
 }
else {
 var oCitySpan = document.createElement('span');
 oCitySpan.id = "city_span";
 var oSelect = document.createElement('input');
oSelect.type = "hidden";
 oSelect.name = "city_select";
 oSelect.id = "city_select";
 oSelect.value = "no_City";
 oCitySpan.appendChild(oSelect);
 document.getElementById("csel_field8").parentNode.appendChild(oCitySpan);
 }
 }