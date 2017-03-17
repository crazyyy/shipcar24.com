define({
  "lounge": {
    "follow_channel_prompt_views": 1,
    "motd_admin_url": "https://blog.disqus.com/protecting-users-privacy-on-disqus?utm_source=motd_admin&amp;utm_medium=web",
    "tracking": {
      "iframe_limit": 4,
      "list": [{
        "url": "//referrer.disqus.com/juggler/stat.gif?event=data_tracker",
        "forced_forums": ["disqus"],
        "rate": 0,
        "type": "img"
      }]
    },
    "motd_home_title": "MIT Technology Review is now on Disqus!",
    "motd_admin_title": "Disqus is now 100% HTTPS",
    "motd_home_url": "https://blog.disqus.com/mit-technology-review-is-now-on-disqus?utm_source=motd_home&amp;utm_medium=web",
    "REALTIME": {
      "BACKOFF_INTERVAL": 4,
      "MAX_HANDSHAKE_FAILS": 1,
      "XHR_ENABLED": false,
      "THREAD_STALE_DAYS": 1
    },
    "telemetry_sample_percent": 1,
    "switches": {
      "before_comment_callback": {
        "forum": ["dsqwordpress", "chivefest", "chivery", "chivery-staging", "thechiverules-brigade", "thechivereviewserver2012", "thechiverules-throttle", "thechiverules", "thechiverules-staging", "thechiverules"]
      },
      "home_ads_prevented": {
        "forum": ["iphoneincanada", "thehill-v4", "nmax", "toofab"]
      },
      "new_analytics_tab": {
        "is_staff": true,
        "percent": 100,
        "forum": ["disqus", "elliott", "spoilertvhome", "androidpolice", "batmannewscom", "wobh", "stylingyou", "hyperallergic", "destructoid", "uscho", "willametteweek", "themanrepeller", "theatlantic", "tvinsider", "arlnow", "truthout", "mental-floss", "dennis-denofgeek", "dennis-theweek", "channel-trailercentral"]
      },
      "moderation_improvements": {
        "is_staff": true,
        "percent": 100,
        "forum": ["cnbc", "fattoquotidiano", "rawstory", "gematsu", "willametteweek", "batmannewscom", "androidpolice", "wobh", "alternet", "channel-offtopic", "channel-discussdisqus", "channel-channelchat"]
      },
      "google_auto_login": {
        "percent": 100
      },
      "ads_optional": {
        "org_percent": 10
      },
      "home_admin_channel": {
        "slug": ["disqusfun"]
      },
      "analytics_intercom": {
        "percent": 0
      },
      "fb_auto_login": {
        "percent": 100
      },
      "login_prompt_flag": {
        "percent": 100
      },
      "forumDeactivationHub": {
        "is_staff": true,
        "percent": 100
      },
      "reveal_show_video": {
        "username": ["Digikid13", "ProductNate", "mariopaganini", "kalail610", "nicoleallard"],
        "org_percent": 25,
        "percent": 100
      },
      "intercomEnabled": {
        "is_staff": true,
        "percent": 0
      },
      "reveal_new_ad_products": {
        "username": ["Digikid13", "ProductNate", "adamstober", "mariopaganini", "kalail610"]
      },
      "moderation_improvements_intercom": {
        "percent": 0
      },
      "registrationFlow": {
        "enableSignup": true
      },
      "reveal_show_display": {
        "username": ["Digikid13", "ProductNate", "mariopaganini", "kalail610", "nicoleallard"],
        "org_percent": 25,
        "percent": 100
      },
      "login_prompt_more_posts": {}
    },
    "motd_marketing_url": "https://about.disqus.com/disqus_vs_livefyre?utm_source=motd_marketing&amp;utm_medium=web",
    "NET_MOD_LIST": ["ryanvalentin", "iamfrancisyo", "wedamija", "ryan04", "tonyhue", "DisqusSweeper", "TaltonFiggins", "saeedoday", "Bravado_General"],
    "motd_marketing_title": "Looking for an alternative to Livefyre?",
    "sentry_rate_limit": 500
  },
  "timelines": {
    "BLACKLISTED_FORUMS": ["cnn", "squiddev-justforfun", "squiddev-todayilearned", "squiddev-ama", "squid", "squiddev", "squid-changemyview", "squiddev-changemyview", "squid-justforfun", "squid-todayilearned", "squid-ama"]
  },
  "readonly": false,
  "mentions": {
    "MAX_PER_POST": 30
  }
})
