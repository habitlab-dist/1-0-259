window.habitlab_content_script = true;

(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/duolingo-lesson-widget.deps.js":function(o,e,t){const{import_dom_modules:i}=t("./src/libs_frontend/dom_utils.ls");t("./src/bower_components/polymer/polymer.deps.js"),t("./src/components/habitlab-logo-v2.deps.js"),i(t("./src/components/duolingo-lesson-widget.html"),"components/duolingo-lesson-widget.html"),t("./src/components/duolingo-lesson-widget.js")},"./src/components/duolingo-lesson-widget.html":function(o,e){o.exports="<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=habitlab-logo-v2.html> <habitlab-dom-module id=duolingo-lesson-widget> <template> <habitlab-custom-style> <style is=habitlab-custom-style>.lesson-container{width:var(--lesson-container-width,100%);background-color:var(--lesson-container-bg-color,#fff);text-align:center}.call-to-action{padding:20px 10px 0 10px;font-size:var(--lesson-call-to-action-font-size,12px);font-style:italic;line-height:1.5}.lesson-hdr{padding:10px 10px 0 10px;font-size:var(--lesson-hdr-font-size,20px)}.duolingo-box{padding:20px 20px 5px 20px;width:100%;box-sizing:border-box;height:500px;border:none;display:flex;align-items:center;justify-content:center}.habitlab-logo{margin-bottom:20px;align-self:center;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}#signin-button{cursor:pointer;padding:10px;background-color:var(--signin-button-bg-color,#346da3);color:#fff;font-size:14px;box-shadow:2px 2px 2px #888;height:40px;width:130px;vertical-align:middle}.duolingo-icon{height:40px;width:40px;margin-right:8px;margin-left:-9px;padding-left:0}#grey-space{background-color:#e9ebee;height:12px;margin-left:-1px;margin-right:-1px}#shadow{height:1px;background-color:#1d2129;opacity:.2}</style> </habitlab-custom-style> <div class=lesson-container on-mouseover=onHovered on-mouseout=onUnhovered> <div class=call-to-action>{{callToAction}}</div> <div class=lesson-hdr>{{lessonTitle}}</div> <iframe class=duolingo-box src={{iframeURL}}></iframe> <habitlab-logo-v2 class=habitlab-logo></habitlab-logo-v2> </div> <div id=shadow></div> <div id=grey-space></div> </template> <script src=duolingo-lesson-widget.js><\/script> </habitlab-dom-module>"},"./src/components/duolingo-lesson-widget.js":function(o,e,t){const{polymer_ext:i}=t("./src/libs_frontend/polymer_utils.ls"),{get_duolingo_info:n,get_duolingo_is_logged_in:s,wait_until_user_is_logged_in:l}=t("./src/generated_libs/libs_frontend/duolingo_utils.js"),{set_alternative_url_to_track:a}=t("./src/libs_frontend/content_script_utils.ls");let r=["All it takes to learn LANGUAGE is a bit of practice each day! You can do this!","All it takes to learn LANGUAGE is a bit of practice each day. You got this!","Have a few minutes to practice your LANGUAGE right now?","Remember your goal to complete a Duolingo lesson each day? Here's a chance to do it!","With consistent practice, you'll be great at LANGUAGE before you know it!","Looks like you're on a break - good time for some Duolingo? :)"],g=["Nice job getting a STREAK-day streak on Duolingo! You can extend it today right here.","Would you like to extend your STREAK-day Duolingo streak? You can do it right here!","All it takes to learn LANGUAGE is a bit of practice every day, which you've had going for the past STREAK day(s). You got this!","Have a few minutes to practice your LANGUAGE right now? It'll extend your streak!"],c=["Congrats on achieving a STREAK-day streak in Duolingo! Want to extend it now?","You are just killing it on Duolingo! STREAK days and counting. Rock on!"],d=["If you'd like more practice today, here's the next lesson.","Great job on your Duolingo goal today! Want more practice? (If not, you can click the button below the quiz to disable for the rest of the day.)","Looks like you're on a break - good time for some more Duolingo? :)"];i({is:"duolingo-lesson-widget",properties:{languageInitials:String,skillTitle:String,skillURL:String,lessonNumber:Number,lessonTitle:{type:String,value:"Loading Duolingo..."},callToAction:{type:String,value:""},iframeURL:{type:String,value:""},isLoggedIn:{type:Boolean,value:!0},duolingoIconURL:{type:String,value:chrome.extension.getURL("goals/duolingo/complete_lesson_each_day/icon.svg")},streak:Number,streakExtendedToday:Boolean,hovered:{type:Boolean,value:!1}},ready:async function(){let[o,e]=await Promise.all([s(),n()]);if(null!=e&&Object.keys(e).length>0){this.streak=e.site_streak;let o=e.learning_language,t=e.language_data[o];this.initializeWithLanguageData(t)}else this.callToAction="This HabitLab nudge needs you to be signed in to Duolingo to work.",this.lessonTitle="Sign in to Activate",this.isLoggedIn=!1,this.iframeURL="https://www.duolingo.com/skill/en/introduction"},initializeWithLanguageData:function(o){this.languageInitials=o.language,console.log(o),"next_lesson"in o?this.setUpForNextLesson(o):this.setUpForPractice(o);let e="";e=(e=0==this.streak?r[Math.floor(Math.random()*r.length)]:this.streakExtendedToday?d[Math.floor(Math.random()*d.length)]:this.streak<5?g[Math.floor(Math.random()*g.length)]:c[Math.floor(Math.random()*c.length)]).replace("STREAK",this.streak),this.callToAction=e.replace("LANGUAGE",o.language_string)},setUpForNextLesson:function(o){this.skillTitle=o.next_lesson.skill_title,this.skillURL=o.next_lesson.skill_url,this.lessonNumber=o.next_lesson.lesson_number,this.lessonTitle=this.skillTitle+", Lesson "+this.lessonNumber,this.iframeURL="https://www.duolingo.com/skill/"+this.languageInitials+"/"+this.skillURL+"/"+this.lessonNumber},setUpForPractice:function(o){this.lessonTitle=o.language_string+" Practice",this.iframeURL="https://www.duolingo.com/practice"},onHovered:function(o){this.hovered=!0,a(this.iframeURL)},onUnhovered:function(o){this.hovered=!1,a(null)},signinClicked:function(o){l(120).then(async function(o){if(o){let o=await n();if(null!=o&&Object.keys(o).length>0){this.streak=o.site_streak;let e=o.learning_language,t=o.language_data[e];this.initializeWithLanguageData(t),this.isLoggedIn=!0}}}.bind(this)),window.open("https://www.duolingo.com")}},{source:t("./src/libs_common/localization_utils.js"),methods:["msg"]})},"./src/generated_libs/libs_frontend/duolingo_utils.js":function(o,e,t){const{import_lib:i}=t("./src/libs_frontend/import_lib.ls");o.exports=i("duolingo_utils")}}]);