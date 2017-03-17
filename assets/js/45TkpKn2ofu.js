if (self.CavalryLogger) {
  CavalryLogger.start_js(["aLpsw"]);
}

__d("ChatPerfEvent", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    ASYNC_REQUEST: "async_request",
    SIDEBAR_FROM_CLIENT_TTI: "sidebar_from_client_tti",
    SIDEBAR_FROM_SERVER_TTI: "sidebar_from_server_tti",
    SIDEBAR_DISPLAY_DONE: "sidebar_display_done",
    TTI: "tti",
    CHAT_CONVERSATION_TTI: "chat_conversation_tti",
    CHAT_INIT_STORES: "chat_init_stores",
    CHAT_INIT_DATA: "chat_init_data",
    CHAT_INIT_UI: "chat_init_ui",
    CHAT_INIT_SOUND: "chat_init_sound",
    CHAT_DISPLAY_DONE: "chat_display_done"
  };
}), null);
__d("EmojiStaticConfig", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    checksumBase: 317426846,
    fileExt: ".png",
    supportedSizes: {
      "16": "DP16",
      "18": "DP18",
      "20": "DP20",
      "24": "DP24",
      "28": "DP28",
      "30": "DP30",
      "32": "DP32",
      "64": "DP64",
      "128": "DP128"
    },
    types: {
      FBEMOJI: "f",
      FB_EMOJI_EXTENDED: "e",
      MESSENGER: "z",
      UNICODE: "u"
    },
    sizeMap: {
      dp16: 16,
      dp18: 18,
      dp20: 20,
      dp24: 24,
      dp28: 28,
      dp30: 30,
      dp32: 32,
      dp64: 64,
      dp128: 128,
      xsmall: 16,
      small: 32,
      medium: 64,
      large: 128
    }
  };
}), null);
__d("FeedbackActionType", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    CHANGE_ACCEPTED_ANSWER: "fa-type:change-accepted-answer",
    COMMENT_LIKE: "fa-type:comment-like",
    COMMENT_REACTION: "fa-type:comment-reaction",
    COMMENT_SET_SPAM: "fa-type:mark-spam",
    DELETE_COMMENT: "fa-type:delete-comment",
    DISABLE_COMMENTS: "fa-type:disable-comments",
    LIVE_DELETE_COMMENT: "fa-type:live-delete-comment",
    LIKE_ACTION: "fa-type:like",
    SUBSCRIBE_ACTION: "fa-type:subscribe",
    REMOVE_PREVIEW: "fa-type:remove-preview",
    MARK_COMMENT_SPAM: "fa-type:mark-spam",
    CONFIRM_COMMENT_REMOVAL: "fa-type:confirm-remove",
    TRANSLATE_COMMENT: "fa-type:translate-comment",
    TRANSLATE_ALL: "fa-type:translate-all-comments",
    COMMENT_LIKECOUNT_UPDATE: "fa-type:comment-likecount-update",
    ADD_COMMENT_ACTION: "fa-type:add-comment",
    REACTION: "fa-type:reaction",
    UPDATE_CONSTITUENT_TITLE: "fa-type:comment_update_constituent_title"
  };
}), null);
__d("FeedbackPayloadSourceType", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    UNKNOWN: 0,
    INITIAL_SERVER: 1,
    LIVE_SEND: 2,
    USER_ACTION: 3,
    STREAMING: 4,
    COLLAPSE_ACTION: 7,
    ENDPOINT_LIKE: 10,
    ENDPOINT_COMMENT_LIKE: 11,
    ENDPOINT_ADD_COMMENT: 12,
    ENDPOINT_EDIT_COMMENT: 13,
    ENDPOINT_DELETE_COMMENT: 14,
    ENDPOINT_HIDE_COMMENT: 16,
    ENDPOINT_REMOVE_PREVIEW: 17,
    ENDPOINT_ID_COMMENT_FETCH: 18,
    ENDPOINT_COMMENT_FETCH: 19,
    ENDPOINT_TRANSLATE_COMMENT: 20,
    ENDPOINT_BAN: 21,
    ENDPOINT_SUBSCRIBE: 22,
    ENDPOINT_COMMENT_LIKECOUNT_UPDATE: 23,
    ENDPOINT_DISABLE_COMMENTS: 24,
    ENDPOINT_ACTOR_CHANGE: 25,
    ENDPOINT_REACTION: 26,
    ENDPOINT_PAGES_MODERATION: 27,
    ENDPOINT_COMMENT_REACTION: 28,
    ENDPOINT_COMMENT_ANSWER_ACCEPT: 29
  };
}), null);
__d("FeedbackSourceType", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    PROFILE: 0,
    NEWS_FEED: 1,
    OBJECT: 2,
    MOBILE: 3,
    EMAIL: 4,
    PROFILE_APPROVAL: 10,
    TICKER: 12,
    NONE: 13,
    INTERN: 14,
    ADS: 15,
    EVENT_GOING_FLYOUT: 16,
    PHOTOS_SNOWLIFT: 17,
    PHOTOS_SNOWFLAKE: 20,
    USER_TIMELINE: 21,
    PAGE_TIMELINE: 22,
    SEARCH: 23,
    PAGE_TAB: 24,
    TIMELINE_COLLECTION: 25,
    ON_THIS_DAY: 27,
    INLINE_COMMENT: 28,
    VIDEOS_CHANNEL: 29,
    PRODUCT_DETAILS: 30,
    NEWSFEED_GROUP_TOP_STORIES: 31,
    LIVE_MAP: 32,
    REDSPACE: 33,
    EVENT_MALL: 34,
    LIVE_VIDEO: 35,
    QUICKSILVER_SPOTLIGHT: 36,
    GROUP_COMMERCE_BOOKMARK: 37,
    WATCH_AND_SCROLL: 38,
    LIVE_WWW_BROADCASTING: 39,
    COMPACT_SEARCH: 40
  };
}), null);
__d("PagesCalloutActions", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    REGISTER_CALLOUT: "register_callout",
    INIT_SURFACE: "init_surface",
    SHOW_CALLOUT: "show_callout",
    DISMISS_CALLOUT: "dismiss_callout"
  };
}), null);
__d("ReactComposerConstants", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    ID_PREFIX: "rc.",
    GK_VIDEO_COPYRIGHT: "video_copyright_confirmation_dialog",
    GK_MULTILINGUAL_COMPOSER: "multilingual_composer_www"
  };
}), null);
__d("StickerInterfaces", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    MESSAGES: "messages",
    COMMENTS: "comments",
    STICKERED: "stickered",
    COMPOSER: "composer",
    POSTS: "posts",
    FRAMES: "frames",
    SMS: "sms",
    MONTAGE: "montage"
  };
}), null);
__d("TrackingNodeTypes", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    HEADLINE: 1,
    USER_NAME: 2,
    ACTOR_PHOTO: 3,
    ACTION_LINKS: 4,
    LIKE_LINK: 5,
    UNLIKE_LINK: 6,
    PARTICIPANT: 7,
    PRONOUN: 8,
    ROBOTEXT: 9,
    TITLE: 10,
    MEDIA_GENERIC: 11,
    PHOTO: 12,
    VIDEO: 13,
    MUSIC: 14,
    ATTACHMENT: 15,
    NAME_LIST: 16,
    SHARE_LINK: 17,
    USER_MESSAGE: 18,
    SUBTITLE: 19,
    DESCRIPTION: 20,
    SOURCE: 21,
    BLINGBOX: 22,
    OTHER: 23,
    VIEW_ALL_COMMENTS: 24,
    COMMENT: 25,
    COMMENT_LINK: 26,
    SMALL_ACTOR_PHOTO: 27,
    SUBSTORY: 28,
    XBUTTON: 29,
    HIDE_LINK: 30,
    REPORT_SPAM_LINK: 31,
    HIDE_ALL_LINK: 32,
    BAD_AGGREGATION_LINK: 33,
    ADD_COMMENT_BOX: 34,
    APP_CALL_TO_ACTION: 35,
    UFI: 36,
    OG_LEFT_SLIDE_PAGER: 37,
    OG_RIGHT_SLIDE_PAGER: 38,
    EXP_CALL_TO_ACTION: 39,
    LARGE_MEDIA_ATTACHMENT: 40,
    FAN_PAGE: 42,
    UNFAN_PAGE: 43,
    SEE_MORE: 44,
    COLLECTION_ROBOTEXT_LINK: 45,
    COLLECTION_ACTION_LINK: 46,
    COLLECTION_TICKER_LINK: 47,
    SPONSORED_LINK: 49,
    PAGE_LINK: 50,
    SOCIAL_CONTEXT: 51,
    SOCIAL_ACTOR_PHOTO: 52,
    OFFERS_CLAIM: 53,
    OFFERS_CLICK: 54,
    DROPDOWN_BUTTON: 55,
    EVENT_VIEW: 56,
    EVENT_RSVP: 57,
    ADS_SHIMMED_LINK: 58,
    COLLECTION_ADD_BUTTON: 59,
    EVENT_INVITE_FRIENDS: 60,
    RHC_AD: 61,
    AD_CREATIVE_TITLE: 62,
    AD_CREATIVE_BODY: 63,
    AD_CREATIVE_IMAGE: 64,
    AD_SOCIAL_SENTENCE: 65,
    APP_NAME: 66,
    GROUP_JOIN: 67,
    PAGE_COVER_PHOTO: 68,
    PAGE_PROFILE_PIC: 69,
    AD_IDENTITY: 70,
    UNHIDE_LINK: 71,
    TRENDING_TOPIC_LINK: 72,
    RELATED_SHARE_ARTICLE: 73,
    OFFERS_USE_NOW: 74,
    RELATED_SHARE_VIDEO: 75,
    RHC_CARD: 76,
    RHC_CARD_HIDE: 77,
    RHC_SIMPLIFICATION: 78,
    RHC_SIMPLIFICATION_HIDE: 79,
    TOPIC_PIVOT_HEADER: 80,
    ADD_FRIEND_BUTTON: 81,
    SNOWLIFT: 82,
    SNOWLIFT_MESSAGE: 83,
    OFFERS_RESEND: 84,
    RHC_LINK_OPEN: 85,
    GENERIC_CALL_TO_ACTION_BUTTON: 86,
    AD_LOGOUT: 87,
    RHC_PHOTO_SLIDER: 88,
    RHC_COMMENT_BUTTON: 89,
    HASHTAG: 90,
    NOTE: 91,
    RELATED_SHARE_ARTICLE_HIDE: 92,
    RELATED_SHARE_VIDEO_HIDE: 93,
    NEKO_PREVIEW: 94,
    OG_COMPOSER_OBJECT: 95,
    INSTALL_ACTION: 96,
    SPONSORED_CONTEXT: 97,
    DIGITAL_GOOD: 98,
    STORY_FOOTER: 99,
    STORY_LOCATION: 100,
    ADD_PHOTO_ACTION: 101,
    ACTION_ICON: 102,
    EGO_FEED_UNIT: 103,
    PLACE_STAR_SURVEY: 104,
    REVIEW_MENU: 105,
    SAVE_ACTION: 106,
    PHOTO_GALLERY: 107,
    SUB_ATTACHMENT: 108,
    FEEDBACK_SECTION: 109,
    ALBUM: 110,
    ALBUM_COLLAGE: 111,
    AVATAR_LIST: 112,
    STORY_LIST: 113,
    MEDIA_CONTROLS: 114,
    ZERO_UPSELL_BUY: 115,
    ZERO_UPSELL_FEED_UNIT: 116,
    RATING: 117,
    PERMALINK_COMMENT: 118,
    LIKE_COUNT: 119,
    RETRY_BUTTON: 120,
    TIMELINE_GIFTS: 121,
    NEARBY_FRIENDS_LIST: 122,
    PRESENCE_UNIT: 123,
    EVENT_INVITE_SENT: 124,
    ATTACHMENT_TITLE: 125,
    HSCROLL_PAGER: 126,
    STORY_MESSAGE: 127,
    STATUS_LINK: 128,
    ADD_MEDIA_LINK: 129,
    ADD_QUESTION_LINK: 130,
    START_Q_AND_A_LINK: 131,
    UPLOAD_FILE_LINK: 132,
    START_CONVERSATION_LINK: 133,
    ATTACH_LIFE_EVENT_LINK: 134,
    ATTACH_PLACE_LINK: 135,
    COVER_PHOTO_EDIT_LINK: 136,
    SHOW_LIKES: 137,
    ROTATE_LEFT_BUTTON: 138,
    ROTATE_RIGHT_BUTTON: 139,
    TAG_LINK: 140,
    CLOSE_BUTTON: 141,
    PAGER_NEXT: 142,
    PAGER_PREVIOUS: 143,
    FULLSCREEN_BUTTON: 144,
    ACTIONS: 145,
    CURATION_MENU: 146,
    PROFILE_PIC_EDIT_LINK: 147,
    VIEW_ALL_SHARES: 148,
    THUMBNAIL_LINK: 149,
    EDIT_HISTORY: 150,
    ADD_TO_THREAD: 151,
    SIDEBAR: 152,
    HOME_SIDENAV: 153,
    BUDDYLIST_NUB: 154,
    TITLEBAR: 155,
    SEND_BUTTON: 156,
    CONVERSATION: 157,
    CHAT_FLYOUT: 158,
    INPUT: 159,
    EMOTICONS: 160,
    VIDEOCHAT: 161,
    TYPEAHEAD: 162,
    OPTIONS_MENU: 163,
    BOOST_POST_BUTTON: 164,
    TOGGLE_BUTTON: 165,
    CHAT_SIDEBAR_FOOTER: 166,
    GRIPPER: 167,
    BOOKMARK_ITEM: 168,
    BOOKMARKS_SECTION: 169,
    BOOKMARKS_NAV: 170,
    RHC: 171,
    RHC_HEADER: 172,
    SIDE_ADS: 173,
    BUDDY_LIST: 174,
    SHOW_ADS_FEED: 184,
    VIDEO_IN_PLAY_CALL_TO_ACTION_BUTTON: 185,
    VIDEO_ENDSCREEN_CALL_TO_ACTION_BUTTON: 186,
    INLINE_PHOTO_PIVOTS_HIDE: 187,
    VIDEO_CALL_TO_ACTION_ENDSCREEN_REPLAY: 188,
    APP_ATTACHMENT: 189,
    ACTIVITY_LINK: 190,
    SAVE_BUTTON: 191,
    SEE_MORE_PHOTO_PAGE_POST_BUTTON: 192,
    BUY_VIRTUAL_GOOD: 193,
    SAVE_SECONDARY_MENU: 194,
    MPP_INSIGHTS: 195,
    WAP_FOOTER: 196,
    GROUP_CANCEL: 197,
    GROUP_LEAVE: 198,
    MESSAGE_LINK: 199,
    VIDEO_SPONSORSHIP_LABEL: 200,
    MULTI_ATTACHMENT_PAGER_NEXT: 201,
    MULTI_ATTACHMENT_PAGER_PREV: 202,
    WEB_CLICK: 203,
    COMPOSER_POST: 204,
    MULTI_ATTACHMENT_VIDEO: 205,
    VIDEO_CALL_TO_ACTION_PAUSESCREEN_RESUME: 206,
    VOICECHAT: 207,
    PAGE_INVITE_FRIEND: 208,
    SEE_MORE_REDIRECT: 209,
    VIDEO_CALL_TO_ACTION_ATTACHMENT: 210,
    PAGE_POST_SEE_FIRST: 211,
    PAGE_POST_DEFAULT: 212,
    TOPIC_FEED_CUSTOMIZATION_UNIT_SUBMIT: 213,
    TOPIC_FEED_CUSTOMIZATION_UNIT_OPTION: 214,
    LEAD_GEN_OPEN_POPOVER: 215,
    LEAD_GEN_SUBMIT_CLICK: 216,
    LEAD_GEN_PRIVACY_CLICK: 217,
    LEAD_GEN_OFFSITE_CLICK: 218,
    EVENT_YOU_MAY_LIKE_HSCROLL: 219,
    LEAD_GEN_CONTEXT_CARD_CLOSE: 220,
    LEAD_GEN_CONTEXT_CARD_CTA_CLICK: 221,
    FEED_STORY_PLACE_ATTACHMENT: 222,
    PAGE_CALL_TO_ACTION_UNIT: 224,
    TRANSLATION: 225,
    FEED_STORY_ATTACHMENT_MISINFO_WARNING: 226,
    UNUSED: -1
  };
}), null);
__d("UFIAddCommentActionType", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    CANCEL: "add_comment_cancel",
    CHANGE_CONTENT: "add_comment_change_content",
    RETRY_SUBMIT: "add_comment_retry_submit",
    SUBMIT_EDIT: "add_comment_submit_edit",
    SUBMIT_NEW: "add_comment_submit_new"
  };
}), null);
__d("UFICommentActionType", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    CHANGE_REACTION: "comment_change_reaction",
    CHANGE_REACTION_FAILURE: "comment_change_reaction_failure",
    CHANGE_REACTION_SUCCESS: "comment_change_reaction_success",
    CHANGE_VISIBILITY: "comment_change_visibility",
    EDIT: "comment_edit",
    EMBED: "embed",
    HIDE_CONSTITUENT_TITLE: "comment_hide_constituent_title",
    MOUNTED: "comment_mounted",
    REMOVE: "comment_remove",
    REMOVE_PREVIEW: "comment_remove_preview",
    SHOW_CONSTITUENT_TITLE: "comment_show_constituent_title",
    TOGGLE_INLINE_BAN: "comment_toggle_inline_ban",
    TOGGLE_LIKE: "comment_toggle_like",
    TOGGLE_MARK_AS_SPAM: "comment_toggle_mark_as_spam",
    TRANSLATE: "comment_translate",
    TRANSLATE_ARRAY: "comment_translate_array",
    UNMOUNTED: "comment_unmounted"
  };
}), null);
__d("UFIFeedbackMode", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    EXPANDED: "expanded",
    NONE: "none",
    NEVER: "never",
    TOGGLE: "toggle"
  };
}), null);
__d("UFIPaging", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    TOP: "top",
    BOTTOM: "bottom",
    ALL: "all"
  };
}), null);
__d("UFIStatus", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    DELETED: "status:deleted",
    SPAM: "status:spam",
    SPAM_DISPLAY: "status:spam-display",
    LIVE_DELETED: "status:live-deleted",
    FAILED_ADD: "status:failed-add",
    FAILED_EDIT: "status:failed-edit",
    PENDING_EDIT: "status:pending-edit"
  };
}), null);
__d("UserHovercardLocation", [], (function a(b, c, d, e, f, g) {
  f.exports = {
    INVALID: "unknown",
    NONE: "none",
    HC_FRIEND_BROWSER: "hc_friend_browser",
    HC_FRIENDS_TAB: "hc_friends_tab",
    HC_PROFILE_BROWSER: "hc_profile_browser",
    HC_STREAM: "hc_stream",
    HC_TIMELINE: "hc_timeline",
    HC_UFI: "hc_ufi",
    HC_REMINDER_POKE: "hc_reminder_poke",
    HC_REMINDER_BIRTHDAY: "hc_reminder_birthday",
    HC_EVENT_GUEST: "hc_event_guest",
    HC_UNKNOWN: "hc_unknown",
    HC_NUX: "hc_nux_page_suggestion",
    FRIEND_BROWSER: "friend_browser",
    FRIENDS_TAB: "friends_tab",
    PROFILE_BROWSER: "profile_browser",
    STREAM: "stream",
    TIMELINE: "timeline",
    UFI: "ufi",
    UFI_ADMIN: "ufi_admin",
    REMINDER_POKE: "reminder_poke",
    REMINDER_BIRTHDAY: "reminder_birthday",
    REMINDER_FACEVERSARY: "reminder_faceversary",
    REMINDER_NAMEDAY: "reminder_nameday",
    REMINDER_WORK_ANNIVERSARY: "reminder_work_anniversary",
    EVENT_GUEST: "event_guest",
    NUX_PAGE_SUGGESTION: "hc_nux_page_suggestion",
    TIMELINE_FRIENDS_BOX: "tl_fr_box",
    CHAT: "chat"
  };
}), null);
__d('PageVoiceDropdownSelector.react', ['cx', 'BootloadedComponent.react', 'Image.react', 'JSResource', 'React', 'XUIPopoverButton.react', 'XUISpinner.react'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i, j, k = c('React').PropTypes;
  i = babelHelpers.inherits(l, c('React').Component);
  j = i && i.prototype;

  function l() {
    var m, n;
    for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
    return n = (m = j.constructor).call.apply(m, [this].concat(p)), this.state = {
      dialogShown: false,
      bootloadFinished: false
    }, this.$PageVoiceDropdownSelector1 = function(r) {
      this.props.onChange(r);
      this.setState({
        dialogShown: false
      });
    }.bind(this), this.$PageVoiceDropdownSelector2 = function() {
      return this.refs['open-menu-button'];
    }.bind(this), this.$PageVoiceDropdownSelector3 = function() {
      this.setState({
        bootloadFinished: true
      });
    }.bind(this), this.$PageVoiceDropdownSelector7 = function(event) {
      this.setState({
        dialogShown: !this.state.dialogShown,
        shownBusinessID: this.state.defaultBusinessID
      }, function() {
        return this.props.onClick(event);
      }.bind(this));
    }.bind(this), this.$PageVoiceDropdownSelector4 = function(r) {
      this.setState({
        dialogShown: r
      });
    }.bind(this), this.$PageVoiceDropdownSelector5 = function() {
      var r = this.props.selectedActorID;
      if (!r) return '';
      if (r === this.props.user.id) return this.props.user.thumbSrc || '';
      return this.props.pages[r].thumbSrc || '';
    }.bind(this), this.$PageVoiceDropdownSelector6 = function() {
      var r = this.props.selectedActorID;
      if (!r) return '';
      if (r === this.props.user.id) return this.props.user.name || '';
      return this.props.pages[r].name || '';
    }.bind(this), n;
  }
  l.prototype.render = function() {
    var m = null;
    if (this.state.dialogShown) m = c('React').createElement(c('BootloadedComponent.react'), babelHelpers['extends']({
      bootloadLoader: c('JSResource')('PageVoiceDropdownSelectorMenu.react').__setRef('PageVoiceDropdownSelector.react'),
      bootloadPlaceholder: c('React').createElement('div', null),
      onComponentLoad: this.$PageVoiceDropdownSelector3
    }, this.props, {
      contextRef: this.$PageVoiceDropdownSelector2,
      shown: true,
      shownBusinessID: this.state.shownBusinessID,
      onChange: this.$PageVoiceDropdownSelector1,
      onToggle: this.$PageVoiceDropdownSelector4
    }));
    var n = this.state.dialogShown && !this.state.bootloadFinished,
      o = this.props.loading || n,
      p = null,
      q = null;
    if (o) {
      q = c('React').createElement('span', {
        className: "_2wk7"
      }, c('React').createElement(c('XUISpinner.react'), null));
    } else p = c('React').createElement(c('Image.react'), {
      className: "_6vg",
      height: 16,
      src: this.$PageVoiceDropdownSelector5(),
      width: 16
    });
    return c('React').createElement('span', null, c('React').createElement(c('XUIPopoverButton.react'), {
      className: "_4z8-",
      disabled: this.props.disabled,
      image: c('React').createElement('span', null, p, q),
      label: this.props.showPageName ? this.$PageVoiceDropdownSelector6() : '',
      maxwidth: this.props.maxwidth,
      ref: 'open-menu-button',
      suppressed: this.props.suppressed,
      type: 'button',
      onClick: this.$PageVoiceDropdownSelector7
    }), m);
  };
  l.propTypes = {
    disabled: k.bool,
    loading: k.bool,
    maxWidth: k.number,
    pages: k.object.isRequired,
    selectedActorID: k.string,
    showPageName: k.bool,
    suppressed: k.bool.isRequired,
    user: k.object.isRequired,
    onChange: k.func.isRequired,
    onClick: k.func.isRequired
  };
  l.defaultProps = {
    disabled: false,
    showPageName: false
  };
  f.exports = l;
}), null);
__d('PagesCalloutDispatcher', ['ExplicitRegistrationReactDispatcher'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h, i;
  h = babelHelpers.inherits(j, c('ExplicitRegistrationReactDispatcher'));
  i = h && h.prototype;

  function j(k) {
    i.constructor.call(this, k);
    this.dispatch = this.dispatch.bind(this);
  }
  f.exports = new j({
    strict: true
  });
}), null);
__d('CallbackManagerController', ['ErrorUtils'], (function a(b, c, d, e, f, g) {
  function h(i) {
    'use strict';
    this.$CallbackManagerController1 = [];
    this.$CallbackManagerController2 = [undefined];
    this.$CallbackManagerController3 = i;
  }
  h.prototype.executeOrEnqueue = function(i, j, k) {
    'use strict';
    k = k || {};
    var l = this.$CallbackManagerController4(j, i, k);
    if (l) return 0;
    this.$CallbackManagerController2.push({
      fn: j,
      request: i,
      options: k
    });
    var m = this.$CallbackManagerController2.length - 1;
    this.$CallbackManagerController1.push(m);
    return m;
  };
  h.prototype.unsubscribe = function(i) {
    'use strict';
    delete this.$CallbackManagerController2[i];
  };
  h.prototype.reset = function() {
    'use strict';
    this.$CallbackManagerController2 = [];
  };
  h.prototype.getRequest = function(i) {
    'use strict';
    return this.$CallbackManagerController2[i];
  };
  h.prototype.runPossibleCallbacks = function() {
    'use strict';
    var i = this.$CallbackManagerController1;
    this.$CallbackManagerController1 = [];
    var j = [];
    i.forEach(function(k) {
      var l = this.$CallbackManagerController2[k];
      if (!l) return;
      if (this.$CallbackManagerController3(l.request, l.options)) {
        j.push(k);
      } else this.$CallbackManagerController1.push(k);
    }.bind(this));
    j.forEach(function(k) {
      var l = this.$CallbackManagerController2[k];
      delete this.$CallbackManagerController2[k];
      this.$CallbackManagerController4(l.fn, l.request, l.options);
    }.bind(this));
  };
  h.prototype.$CallbackManagerController4 = function(i, j, k) {
    'use strict';
    var l = this.$CallbackManagerController3(j, k);
    if (l) {
      var m = {
        ids: j
      };
      c('ErrorUtils').applyWithGuard(i, m, l);
    }
    return !!l;
  };
  f.exports = h;
}), null);
__d('KeyedCallbackManager', ['CallbackManagerController', 'ErrorUtils'], (function a(b, c, d, e, f, g) {
  function h() {
    'use strict';
    this.$KeyedCallbackManager1 = {};
    this.$KeyedCallbackManager2 = new(c('CallbackManagerController'))(this.$KeyedCallbackManager3.bind(this));
  }
  h.prototype.executeOrEnqueue = function(i, j) {
    'use strict';
    if (!(i instanceof Array)) {
      var k = i,
        l = j;
      i = [i];
      j = function m(n) {
        l(n[k]);
      };
    }
    i = i.filter(function(m) {
      var n = m !== null && m !== undefined;
      if (!n) c('ErrorUtils').applyWithGuard(function() {
        throw new Error('KeyedCallbackManager.executeOrEnqueue: key ' + JSON.stringify(m) + ' is invalid');
      });
      return n;
    });
    return this.$KeyedCallbackManager2.executeOrEnqueue(i, j);
  };
  h.prototype.unsubscribe = function(i) {
    'use strict';
    this.$KeyedCallbackManager2.unsubscribe(i);
  };
  h.prototype.reset = function() {
    'use strict';
    this.$KeyedCallbackManager2.reset();
    this.$KeyedCallbackManager1 = {};
  };
  h.prototype.getUnavailableResources = function(i) {
    'use strict';
    var j = this.$KeyedCallbackManager2.getRequest(i),
      k = [];
    if (j) k = j.request.filter(function(l) {
      return !this.$KeyedCallbackManager1[l];
    }.bind(this));
    return k;
  };
  h.prototype.getUnavailableResourcesFromRequest = function(i) {
    'use strict';
    var j = Array.isArray(i) ? i : [i];
    return j.filter(function(k) {
      if (k !== null && k !== undefined) return !this.$KeyedCallbackManager1[k];
    }, this);
  };
  h.prototype.addResourcesAndExecute = function(i) {
    'use strict';
    Object.assign(this.$KeyedCallbackManager1, i);
    this.$KeyedCallbackManager2.runPossibleCallbacks();
  };
  h.prototype.setResource = function(i, j) {
    'use strict';
    this.$KeyedCallbackManager1[i] = j;
    this.$KeyedCallbackManager2.runPossibleCallbacks();
  };
  h.prototype.getResource = function(i) {
    'use strict';
    return this.$KeyedCallbackManager1[i];
  };
  h.prototype.getAllResources = function() {
    'use strict';
    return this.$KeyedCallbackManager1;
  };
  h.prototype.dumpResources = function() {
    'use strict';
    var i = {};
    for (var j in this.$KeyedCallbackManager1) {
      var k = this.$KeyedCallbackManager1[j];
      if (typeof k === 'object') k = babelHelpers['extends']({}, k);
      i[j] = k;
    }
    return i;
  };
  h.prototype.$KeyedCallbackManager3 = function(i) {
    'use strict';
    var j = {};
    for (var k = 0; k < i.length; k++) {
      var l = i[k],
        m = this.$KeyedCallbackManager1[l];
      if (typeof m == 'undefined') return false;
      j[l] = m;
    }
    return [j];
  };
  f.exports = h;
}), null);
__d('BaseAsyncLoader', ['KeyedCallbackManager', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
  var h = {};

  function i(k, l, m) {
    var n = new(c('KeyedCallbackManager'))(),
      o = false,
      p = [];

    function q() {
      if (!p.length || o) return;
      o = true;
      c('setTimeoutAcrossTransitions')(s, 0);
    }

    function r(v) {
      o = false;
      v.forEach(n.unsubscribe.bind(n));
      q();
    }

    function s() {
      var v = {},
        w = [];
      p = p.filter(function(y) {
        var z = n.getUnavailableResources(y);
        if (z.length) {
          z.forEach(function(aa) {
            v[aa] = true;
          });
          w.push(y);
          return true;
        }
        return false;
      });
      var x = Object.keys(v);
      if (x.length) {
        m(k, x, w, t.bind(null, w), u.bind(null, w));
      } else o = false;
    }

    function t(v, w) {
      var x = w.payload[l] || w.payload;
      n.addResourcesAndExecute(x);
      r(v);
    }

    function u(v) {
      r(v);
    }
    return {
      get: function v(w, x) {
        var y = n.executeOrEnqueue(w, x),
          z = n.getUnavailableResources(y);
        if (z.length) {
          p.push(y);
          q();
        }
      },
      getCachedKeys: function v() {
        return Object.keys(n.getAllResources());
      },
      getNow: function v(w) {
        return n.getResource(w) || null;
      },
      set: function v(w) {
        n.addResourcesAndExecute(w);
      }
    };
  }

  function j(k, l) {
    throw new Error('BaseAsyncLoader can\'t be instantiated');
  }
  Object.assign(j.prototype, {
    _getLoader: function k() {
      if (!h[this._endpoint]) h[this._endpoint] = i(this._endpoint, this._type, this.send);
      return h[this._endpoint];
    },
    get: function k(l, m) {
      return this._getLoader().get(l, m);
    },
    getCachedKeys: function k() {
      return this._getLoader().getCachedKeys();
    },
    getNow: function k(l) {
      return this._getLoader().getNow(l);
    },
    reset: function k() {
      h[this._endpoint] = null;
    },
    set: function k(l) {
      this._getLoader().set(l);
    }
  });
  f.exports = j;
}), null);
__d('LogHistory', ['CircularBuffer'], (function a(b, c, d, e, f, g) {
  var h = 500,
    i = {},
    j = new(c('CircularBuffer'))(h);

  function k(s, t, event, u) {
    if (typeof u[0] !== 'string' || u.length !== 1) return;
    j.write({
      date: Date.now(),
      level: s,
      category: t,
      event: event,
      args: u[0]
    });
  }

  function l(s) {
    'use strict';
    this.category = s;
  }
  l.prototype.debug = function(event) {
    'use strict';
    for (var s = arguments.length, t = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) t[u - 1] = arguments[u];
    k('debug', this.category, event, t);
    return this;
  };
  l.prototype.log = function(event) {
    'use strict';
    for (var s = arguments.length, t = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) t[u - 1] = arguments[u];
    k('log', this.category, event, t);
    return this;
  };
  l.prototype.warn = function(event) {
    'use strict';
    for (var s = arguments.length, t = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) t[u - 1] = arguments[u];
    k('warn', this.category, event, t);
    return this;
  };
  l.prototype.error = function(event) {
    'use strict';
    for (var s = arguments.length, t = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) t[u - 1] = arguments[u];
    k('error', this.category, event, t);
    return this;
  };

  function m(s) {
    if (!i[s]) i[s] = new l(s);
    return i[s];
  }

  function n() {
    return j.read();
  }

  function o() {
    j.clear();
  }

  function p(s) {}

  function q(s) {
    return s.map(function(t) {
      var u = /\d\d:\d\d:\d\d/.exec(new Date(t.date));
      return [u && u[0], t.level, t.category, t.event, t.args].join(' | ');
    }).join('\n');
  }
  var r = {
    MAX: h,
    getInstance: m,
    getEntries: n,
    clearEntries: o,
    toConsole: p,
    formatEntries: q
  };
  f.exports = r;
}), null);
__d('AjaxLoader', ['AsyncRequest', 'BaseAsyncLoader', 'LogHistory'], (function a(b, c, d, e, f, g) {
  var h = c('LogHistory').getInstance('ajax_loader');

  function i(j, k) {
    this._endpoint = j;
    this._type = k;
  }
  Object.assign(i.prototype, c('BaseAsyncLoader').prototype);
  i.prototype.send = function(j, k, l, m, n) {
    new(c('AsyncRequest'))().setURI(j).setData({
      ids: k
    }).setMethod('POST').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(o) {
      m(o);
    }).setErrorHandler(function(o) {
      n();
      h.error('fetch_error', {
        error_type: o.errorSummary,
        error_text: o.errorDescription
      });
    }).send();
  };
  f.exports = i;
}), null);
__d("XChatUserInfoAllAsyncController", ["XController"], (function a(b, c, d, e, f, g) {
  f.exports = c("XController").create("\/chat\/user_info_all\/", {
    viewer: {
      type: "Int",
      required: true
    }
  });
}), null);
__d('ShortProfilesBootstrapper', ['Promise', 'AsyncRequest', 'BanzaiODS', 'CurrentUser', 'JSLogger', 'XChatUserInfoAllAsyncController'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = 5,
    i = 10000,
    j = c('XChatUserInfoAllAsyncController').getURIBuilder().setInt('viewer', c('CurrentUser').getID()).getURI(),
    k = c('JSLogger').create('short_profiles');

  function l(m) {
    this.$ShortProfilesBootstrapper1 = m;
    this.$ShortProfilesBootstrapper2 = new(c('Promise'))(function(n, o) {
      this.$ShortProfilesBootstrapper3 = n;
      this.$ShortProfilesBootstrapper4 = o;
    }.bind(this));
    this.$ShortProfilesBootstrapper5 = false;
    this.$ShortProfilesBootstrapper6 = null;
    this.$ShortProfilesBootstrapper7 = 0;
    this.$ShortProfilesBootstrapper8 = 0;
    this.$ShortProfilesBootstrapper9 = 0;
    this.$ShortProfilesBootstrapper10 = false;
    this.$ShortProfilesBootstrapper11 = false;
  }
  l.prototype.fetchAll = function() {
    this.$ShortProfilesBootstrapper12();
    if (this.$ShortProfilesBootstrapper5 || this.$ShortProfilesBootstrapper6) return this.$ShortProfilesBootstrapper2;
    if (this.$ShortProfilesBootstrapper7 >= h) {
      this.$ShortProfilesBootstrapper13();
      return this.$ShortProfilesBootstrapper2;
    }
    this.$ShortProfilesBootstrapper7++;
    this.$ShortProfilesBootstrapper14();
    this.$ShortProfilesBootstrapper6 = new(c('AsyncRequest'))(j).setHandler(function(m) {
      this.$ShortProfilesBootstrapper6 = null;
      this.$ShortProfilesBootstrapper5 = true;
      this.$ShortProfilesBootstrapper15();
      this.$ShortProfilesBootstrapper1(m.payload);
      this.$ShortProfilesBootstrapper3();
    }.bind(this)).setErrorHandler(function() {
      this.$ShortProfilesBootstrapper6 = null;
      this.$ShortProfilesBootstrapper8++;
      this.$ShortProfilesBootstrapper16();
    }.bind(this)).setTimeoutHandler(i, function() {
      this.$ShortProfilesBootstrapper6 = null;
      this.$ShortProfilesBootstrapper9++;
      this.$ShortProfilesBootstrapper17();
      this.fetchAll();
    }.bind(this)).setAllowCrossPageTransition(true);
    this.$ShortProfilesBootstrapper6.send();
    return this.$ShortProfilesBootstrapper2;
  };
  l.prototype.isBootstrapped = function() {
    return this.$ShortProfilesBootstrapper5;
  };
  l.prototype.isBootstrapping = function() {
    return !!this.$ShortProfilesBootstrapper6;
  };
  l.prototype.getAttemptCount = function() {
    return this.$ShortProfilesBootstrapper7;
  };
  l.prototype.getErrorCount = function() {
    return this.$ShortProfilesBootstrapper8;
  };
  l.prototype.getTimeoutCount = function() {
    return this.$ShortProfilesBootstrapper9;
  };
  l.prototype.$ShortProfilesBootstrapper12 = function() {
    if (!this.$ShortProfilesBootstrapper10) {
      k.log('bootstrap_start');
      c('BanzaiODS').bumpEntityKey('chat.web', 'typeahead.bootstrap.starts');
      this.$ShortProfilesBootstrapper10 = true;
    }
  };
  l.prototype.$ShortProfilesBootstrapper14 = function() {
    k.log('bootstrap_attempt');
    c('BanzaiODS').bumpEntityKey('chat.web', 'typeahead.bootstrap.attempts');
  };
  l.prototype.$ShortProfilesBootstrapper15 = function() {
    k.log('bootstrap_success');
    c('BanzaiODS').bumpEntityKey('chat.web', 'typeahead.bootstrap.successes');
    if (this.$ShortProfilesBootstrapper7 > 1) c('BanzaiODS').bumpEntityKey('chat.web', 'typeahead.bootstrap.successes_after_retries');
  };
  l.prototype.$ShortProfilesBootstrapper16 = function() {
    k.log('bootstrap_error');
    c('BanzaiODS').bumpEntityKey('chat.web', 'typeahead.bootstrap.errors');
  };
  l.prototype.$ShortProfilesBootstrapper17 = function() {
    k.log('bootstrap_timeout');
    c('BanzaiODS').bumpEntityKey('chat.web', 'typeahead.bootstrap.timeouts');
  };
  l.prototype.$ShortProfilesBootstrapper13 = function() {
    if (!this.$ShortProfilesBootstrapper11) {
      k.log('bootstrap_giveup');
      c('BanzaiODS').bumpEntityKey('chat.web', 'typeahead.bootstrap.giveups');
      this.$ShortProfilesBootstrapper11 = true;
      this.$ShortProfilesBootstrapper4();
    }
  };
  f.exports = l;
}), null);
__d("XChatUserInfoAsyncController", ["XController"], (function a(b, c, d, e, f, g) {
  f.exports = c("XController").create("\/chat\/user_info\/", {
    ids: {
      type: "IntVector",
      defaultValue: []
    }
  });
}), null);
__d('ShortProfiles', ['AjaxLoader', 'Arbiter', 'JSLogger', 'ShortProfilesBootstrapper', 'XChatUserInfoAsyncController', 'emptyFunction'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = null,
    i = new(c('AjaxLoader'))(c('XChatUserInfoAsyncController').getURIBuilder().getURI().toString(), 'profiles'),
    j = {
      get: function k(l, m) {
        this.getMulti([l], function(n) {
          return m(n[l], l);
        });
      },
      getMulti: function k(l, m) {
        i.get(l, m || c('emptyFunction'));
      },
      getNow: function k(l) {
        return i.getNow(l) || null;
      },
      getMultiNow: function k(l) {
        var m = {};
        l.forEach(function(n) {
          return m[n] = j.getNow(n);
        });
        return m;
      },
      getCachedProfileIDs: function k() {
        return i.getCachedKeys();
      },
      hasAll: function k() {
        return !!h && h.isBootstrapped();
      },
      fetchAll: function k() {
        if (!h) h = new(c('ShortProfilesBootstrapper'))(function(l) {
          i.set(l);
        });
        return h.fetchAll();
      },
      set: function k(l, m) {
        var n = {};
        n[l] = m;
        this.setMulti(n);
      },
      setMulti: function k(l) {
        i.set(l);
      }
    };
  c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT, function(k, l) {
    var m = j.getCachedProfileIDs(),
      n = c('JSLogger').getEntries(function(o) {
        return (o.cat == 'short_profiles' || o.cat == 'chat_typeahead');
      });
    l.chat_typeahead = {
      bootstrapped: h && h.isBootstrapped(),
      bootstrapping: h && h.isBootstrapping(),
      bootstrap_attempts: h && h.getAttemptCount(),
      bootstrap_errors: h && h.getErrorCount(),
      bootstrap_timeouts: h && h.getTimeoutCount(),
      entries: m,
      entry_count: m.length,
      history: n
    };
  });
  f.exports = j;
}), null);
__d('ActorSelector.react', ['cx', 'Arbiter', 'BizSiteIdentifier.brands', 'BootloadedComponent.react', 'Bootloader', 'Event', 'JSResource', 'PagesCalloutActions', 'PagesCalloutDispatcher', 'PageVoiceDropdownSelector.react', 'React', 'ReactDOM', 'ShortProfiles', 'TooltipData', 'emptyFunction', 'getObjectValues', 'goURI', 'joinClasses', 'tidyEvent'], (function a(b, c, d, e, f, g, h) {
  var i, j, k = c('React').PropTypes,
    l = 500;
  i = babelHelpers.inherits(m, c('React').Component);
  j = i && i.prototype;

  function m() {
    var n, o;
    'use strict';
    for (var p = arguments.length, q = Array(p), r = 0; r < p; r++) q[r] = arguments[r];
    return o = (n = j.constructor).call.apply(n, [this].concat(q)), this.state = {
      actorData: {},
      nuxShown: false,
      selectedActorID: this.props.selectedActorID
    }, this.$ActorSelector4 = function() {
      return this.refs.selector;
    }.bind(this), this.$ActorSelector3 = function() {
      c('ShortProfiles').getMulti(this.props.actorIDs, function(s) {
        if (this.$ActorSelector2) this.setState({
          actorData: s
        });
      }.bind(this));
    }.bind(this), this.$ActorSelector8 = function() {
      if (this.state.nuxShown) this.$ActorSelector5();
    }.bind(this), this.$ActorSelector7 = function(s) {
      if (this.props.syncEnabled) {
        c('Arbiter').inform('ActorSelector/ActorChange', s);
        return;
      }
      this.props.onChange(s);
    }.bind(this), this.$ActorSelector6 = function() {
      this.$ActorSelector5();
      c('goURI')(this.props.settingsURI);
    }.bind(this), this.$ActorSelector5 = function() {
      this.setState({
        nuxShown: false
      });
      if (this.props.onCompleteNux) this.props.onCompleteNux();
    }.bind(this), this.$ActorSelector10 = function() {
      if (!this.props.nuxEnabled) return;
      if (this.props.nuxHoverContext && !this.$ActorSelector13) this.$ActorSelector13 = c('tidyEvent')(c('Event').listen(this.props.nuxHoverContext, 'mouseenter', function() {
        c('Bootloader').loadModules(["ActorSelectorNUXLayer.react"], c('emptyFunction'), 'ActorSelector.react');
        var s = setTimeout(function() {
            this.$ActorSelector13.remove();
            this.$ActorSelector14();
          }.bind(this), l),
          t = c('tidyEvent')(c('Event').listen(this.props.nuxHoverContext, 'mouseleave', function() {
            clearTimeout(s);
            t.remove();
          }));
      }.bind(this)));
    }.bind(this), this.$ActorSelector9 = function() {
      if (!this.props.nuxEnabled || !this.props.pageTimelineNuxTipID) return;
      c('PagesCalloutDispatcher').dispatch({
        type: c('PagesCalloutActions').REGISTER_CALLOUT,
        data: {
          tip_id: this.props.pageTimelineNuxTipID,
          showCallback: function() {
            return this.$ActorSelector14();
          }.bind(this)
        }
      });
    }.bind(this), this.$ActorSelector14 = function() {
      if (this.props.nuxEnabled) this.setState({
        nuxShown: true
      });
    }.bind(this), o;
  }
  m.prototype.componentWillMount = function() {
    'use strict';
    this.$ActorSelector2 = true;
    this.$ActorSelector3();
  };
  m.prototype.render = function() {
    'use strict';
    if (!this.state.selectedActorID || !this.state.actorData[this.state.selectedActorID]) return c('React').createElement('div', null);
    if (this.props.actorIDs.length === 0) return c('React').createElement('div', null);
    var n = null;
    if (this.state.nuxShown) n = c('React').createElement(c('BootloadedComponent.react'), {
      bootloadLoader: c('JSResource')('ActorSelectorNUXLayer.react').__setRef('ActorSelector.react'),
      bootloadPlaceholder: c('React').createElement('span', null),
      onCompleteNux: this.$ActorSelector5,
      onClickSettings: this.$ActorSelector6,
      settingsURI: this.props.settingsURI,
      shown: true,
      contextRef: this.$ActorSelector4,
      nuxBody: this.props.nuxBody
    });
    return c('React').createElement('span', {
      className: c('joinClasses')("_6vh", this.props.className)
    }, c('React').createElement('span', {
      ref: 'selector'
    }, c('React').createElement(c('PageVoiceDropdownSelector.react'), {
      disabled: this.props.disabled,
      loading: this.props.loading,
      pages: this.state.actorData,
      onChange: this.$ActorSelector7,
      onClick: this.$ActorSelector8,
      selectedActorID: this.state.selectedActorID,
      searchBarVisible: true,
      showBusinessPages: false,
      showPageName: this.props.showName,
      showNameMaxWidth: this.props.showNameMaxWidth,
      showPersonalPagesInRoot: !c('BizSiteIdentifier.brands').isBizSite(),
      suppressed: this.props.suppressed,
      user: c('getObjectValues')(this.state.actorData)[0]
    })), n);
  };
  m.prototype.componentDidMount = function() {
    'use strict';
    this.$ActorSelector9();
    this.$ActorSelector10();
    this.$ActorSelector11();
    if (this.props.syncEnabled) this.$ActorSelector12();
  };
  m.prototype.componentDidUpdate = function(n, o) {
    'use strict';
    if (this.props.actorIDs.toString() !== n.actorIDs.toString()) this.$ActorSelector3();
    this.$ActorSelector10();
    this.$ActorSelector11();
    if (this.state.nuxShown && !o.nuxShown && this.props.onShowNux) this.props.onShowNux();
    if (this.props.selectedActorID !== n.selectedActorID) this.setState({
      selectedActorID: this.props.selectedActorID
    });
  };
  m.prototype.componentWillUnmount = function() {
    'use strict';
    this.$ActorSelector2 = false;
    this.$ActorSelector1 && c('Arbiter').unsubscribe(this.$ActorSelector1);
  };
  m.prototype.$ActorSelector12 = function() {
    'use strict';
    this.$ActorSelector1 = c('Arbiter').subscribe('ActorSelector/ActorChange', function(n, o) {
      if (this.props.actorIDs.indexOf(o.value) === -1) return;
      this.setState({
        selectedActorID: o.value
      }, function() {
        return this.props.onChange(o);
      }.bind(this));
    }.bind(this));
  };
  m.prototype.$ActorSelector11 = function() {
    'use strict';
    if (!this.refs.selector) return;
    var n = this.state.actorData[this.state.selectedActorID];
    if (!n) return;
    if (!this.props.tooltipConstructor) return;
    c('TooltipData').set(c('ReactDOM').findDOMNode(this.refs.selector), this.props.tooltipConstructor(n.name), 'above', 'right');
  };
  m.propTypes = {
    actorIDs: k.array.isRequired,
    disabled: k.bool,
    loading: k.bool,
    nuxBody: k.node,
    nuxEnabled: k.bool,
    nuxHoverContext: k.object,
    onChange: k.func.isRequired,
    onCompleteNux: k.func,
    onShowNux: k.func,
    pageTimelineNuxTipID: k.string,
    selectedActorID: k.string,
    settingsURI: k.string,
    showName: k.bool,
    showNameMaxWidth: k.number,
    suppressed: k.bool,
    syncEnabled: k.bool,
    tooltipConstructor: k.func
  };
  m.defaultProps = {
    disabled: false,
    suppressed: true
  };
  f.exports = m;
}), null);
__d('dangerouslyBypassDispatchError', [], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = function i(j) {
    for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++) l[m - 1] = arguments[m];
    setTimeout(function() {
      j.apply(null, l);
    }, 0);
  };
  f.exports = h;
}), null);
__d('ChannelConstants', [], (function a(b, c, d, e, f, g) {
  var h = 'channel/',
    i = {
      CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2000,
      MUTE_WARNING_TIME_MSEC: 25000,
      WARNING_COUNTDOWN_THRESHOLD_MSEC: 15000,
      ON_SHUTDOWN: h + 'shutdown',
      ON_INVALID_HISTORY: h + 'invalid_history',
      ON_CONFIG: h + 'config',
      ON_ENTER_STATE: h + 'enter_state',
      ON_EXIT_STATE: h + 'exit_state',
      ATTEMPT_RECONNECT: h + 'attempt_reconnect',
      RTI_SESSION: h + 'new_rti_address',
      GET_RTI_SESSION_REQUEST: h + 'rti_session_request',
      SKYWALKER: h + 'skywalker',
      CHANNEL_ESTABLISHED: h + 'established',
      OK: 'ok',
      ERROR: 'error',
      ERROR_MAX: 'error_max',
      ERROR_MISSING: 'error_missing',
      ERROR_MSG_TYPE: 'error_msg_type',
      ERROR_SHUTDOWN: 'error_shutdown',
      ERROR_STALE: 'error_stale',
      SYS_OWNER: 'sys_owner',
      SYS_NONOWNER: 'sys_nonowner',
      SYS_ONLINE: 'sys_online',
      SYS_OFFLINE: 'sys_offline',
      SYS_TIMETRAVEL: 'sys_timetravel',
      HINT_AUTH: 'shutdown auth',
      HINT_CONN: 'shutdown conn',
      HINT_DISABLED: 'shutdown disabled',
      HINT_INVALID_STATE: 'shutdown invalid state',
      HINT_MAINT: 'shutdown maint',
      HINT_UNSUPPORTED: 'shutdown unsupported',
      reason_Unknown: 0,
      reason_AsyncError: 1,
      reason_TooLong: 2,
      reason_Refresh: 3,
      reason_RefreshDelay: 4,
      reason_UIRestart: 5,
      reason_NeedSeq: 6,
      reason_PrevFailed: 7,
      reason_IFrameLoadGiveUp: 8,
      reason_IFrameLoadRetry: 9,
      reason_IFrameLoadRetryWorked: 10,
      reason_PageTransitionRetry: 11,
      reason_IFrameLoadMaxSubdomain: 12,
      reason_NoChannelInfo: 13,
      reason_NoChannelHost: 14,
      CAPABILITY_VOIP_INTEROP: 8,
      FANTAIL_SERVICE: 'WebchatClient',
      SUBSCRIBE: 'subscribe',
      UNSUBSCRIBE: 'unsubscribe',
      FAKE_DFF: 'fake_dff',
      getArbiterType: function j(k) {
        return h + 'message:' + k;
      },
      getSkywalkerArbiterType: function j(k) {
        return h + 'skywalker:' + k;
      }
    };
  f.exports = i;
}), null);
__d('UFIConstants', ['FeedbackActionType', 'UFIFeedbackMode', 'FeedbackSourceType', 'FeedbackPayloadSourceType', 'UFIStatus', 'UFIPaging'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = 80,
    i = {
      UFIActionType: c('FeedbackActionType'),
      UFIFeedbackMode: c('UFIFeedbackMode'),
      UFIFeedbackSourceType: c('FeedbackSourceType'),
      UFIPayloadSourceType: c('FeedbackPayloadSourceType'),
      UFIStatus: c('UFIStatus'),
      UFIPaging: c('UFIPaging'),
      attachmentTruncationLength: h,
      commentTruncationLength: 420,
      commentTruncationMaxLines: 3,
      commentTruncationPercent: .6,
      commentURLTruncationLength: 60,
      infiniteScrollRangeForQANDAPermalinks: 1000,
      minCommentsForOrderingModeSelector: 1,
      unavailableCommentKey: 'unavailable_comment_key'
    };
  f.exports = i;
}), null);
__d('ReactDispatcher_DEPRECATED', ['Dispatcher_DEPRECATED', 'ReactDOM'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h, i;
  h = babelHelpers.inherits(j, c('Dispatcher_DEPRECATED'));
  i = h && h.prototype;
  j.prototype.dispatch = function(k) {
    c('ReactDOM').unstable_batchedUpdates(function() {
      i.dispatch.call(this, k);
    }.bind(this));
  };

  function j() {
    h.apply(this, arguments);
  }
  f.exports = j;
}), null);
__d('UFIDispatcherBase', ['invariant', 'ReactDispatcher_DEPRECATED', 'UFICommentActionType', 'dangerouslyBypassDispatchError'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i, j;

  function k(n, o) {
    return Object.values(o).indexOf(n) >= 0;
  }

  function l(n, o, p) {
    n[o] || h(0);
  }
  i = babelHelpers.inherits(m, c('ReactDispatcher_DEPRECATED'));
  j = i && i.prototype;
  m.prototype.dispatch = function(n) {
    l(n, 'instanceID', 'contextArgs.instanceid');
    l(n, 'ftentidentifier', 'contextArgs.ftentidentifier');
    if (k(n.type, c('UFICommentActionType'))) l(n, 'fbid', 'comment.fbid');
    try {
      j.dispatch.call(this, n);
    } catch (o) {
      c('dangerouslyBypassDispatchError')(function() {
        return j.dispatch.call(this, n);
      }.bind(this));
    }
  };

  function m() {
    i.apply(this, arguments);
  }
  f.exports = new m();
}), null);
__d('ServerTime', ['InitialServerTime'], (function a(b, c, d, e, f, g) {
  k(c('InitialServerTime').serverTime);
  var h;

  function i() {
    return Date.now() - h;
  }

  function j() {
    return h;
  }

  function k(l) {
    h = Date.now() - l;
  }
  f.exports = {
    getMillis: i,
    getOffsetMillis: j,
    update: k,
    get: i,
    getSkew: j
  };
}), null);
__d('LiveTimer', ['fbt', 'csx', 'cx', 'CSS', 'DOM', 'ServerTime', 'TimeSlice', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g, h, i, j) {
  var k = 1000,
    l = 60,
    m = 3600,
    n = 43200,
    o = 86400,
    p = 60,
    q = 60000,
    r = {
      restart: function s(t) {
        c('ServerTime').update(t * 1000);
        this.updateTimeStamps();
      },
      getApproximateServerTime: function s() {
        return c('ServerTime').get();
      },
      getServerTimeOffset: function s() {
        return -1 * c('ServerTime').getSkew();
      },
      updateTimeStamps: function s() {
        this.timestamps = c('DOM').scry(document.body, 'abbr.livetimestamp');
        this.startLoop(q);
      },
      addTimeStamps: function s(t) {
        if (!t) return;
        this.timestamps = this.timestamps || [];
        if (c('DOM').isNodeOfType(t, 'abbr') && c('CSS').hasClass(t, 'livetimestamp')) {
          this.timestamps.push(t);
        } else {
          var u = c('DOM').scry(t, 'abbr.livetimestamp');
          for (var v = 0; v < u.length; ++v) this.timestamps.push(u[v]);
        }
        this.startLoop(0);
      },
      removeTimestamp: function s(t) {
        if (!this.timestamps || !t) return;
        var u = this.timestamps.indexOf(t);
        if (u > -1) this.timestamps.splice(u, 1);
      },
      startLoop: function s(t) {
        this.stop();
        this.createTimeout(t);
      },
      createTimeout: function s(t) {
        this.timeout = c('setTimeoutAcrossTransitions')(c('TimeSlice').guard(function() {
          this.loop();
        }.bind(this), 'LiveTimer.loop', {
          isContinuation: false
        }), t);
      },
      stop: function s() {
        clearTimeout(this.timeout);
      },
      loop: function s(t) {
        if (t) this.updateTimeStamps();
        var u = Math.floor(c('ServerTime').get() / k),
          v = -1;
        this.timestamps && this.timestamps.forEach(function(x) {
          var y = x.getAttribute('data-utime'),
            z = x.getAttribute('data-shorten'),
            aa = x.getAttribute('data-minimize'),
            ba = this.renderRelativeTime(u, y, z, aa);
          if (ba.text) {
            var ca = {
                'class': "timestampContent"
              },
              da = c('DOM').scry(x, ".timestampContent")[0],
              ea = da && da.getAttribute('id');
            if (ea) ca.id = ea;
            c('DOM').setContent(x, c('DOM').create('span', ca, ba.text));
          }
          if (ba.next != -1 && (ba.next < v || v == -1)) v = ba.next;
        }.bind(this));
        if (v != -1) {
          var w = Math.max(q, v * k);
          this.createTimeout(w);
        }
      },
      renderRelativeTime: function s(t, u, v, w) {
        var x = {
          text: "",
          next: -1
        };
        if (t - u > o) return x;
        var y = t - u,
          z = Math.floor(y / l),
          aa = Math.floor(z / p);
        if (z < 1) {
          if (w) {
            x.text = h._("1m");
            x.next = 20 - y % 20;
          } else if (v) {
            x.text = h._("Just now");
            x.next = 20 - y % 20;
          } else {
            x.text = h._("a few seconds ago");
            x.next = l - y % l;
          }
          return x;
        }
        if (aa < 1) {
          if (w) {
            x.text = h._({
              "*": "{number}m"
            }, [h.param('number', z, [0])]);
          } else if (v && z == 1) {
            x.text = h._("1 min");
          } else if (v) {
            x.text = h._({
              "*": "{number} mins"
            }, [h.param('number', z, [0])]);
          } else x.text = z == 1 ? h._("about a minute ago") : h._({
            "*": "{number} minutes ago"
          }, [h.param('number', z, [0])]);
          x.next = l - y % l;
          return x;
        }
        if (aa < 11) x.next = m - y % m;
        if (w) {
          x.text = h._({
            "*": "{number}h"
          }, [h.param('number', aa, [0])]);
        } else if (v && aa == 1) {
          x.text = h._("1 hr");
        } else if (v) {
          x.text = h._({
            "*": "{number} hrs"
          }, [h.param('number', aa, [0])]);
        } else x.text = aa == 1 ? h._("about an hour ago") : h._({
          "*": "{number} hours ago"
        }, [h.param('number', aa, [0])]);
        return x;
      },
      renderRelativeTimeToServer: function s(t, u, v) {
        return this.renderRelativeTime(Math.floor(c('ServerTime').get() / k), t, u, v);
      }
    };
  f.exports = r;
  f.exports.CONSTS = {
    MS_IN_SEC: k,
    SEC_IN_MIN: l,
    SEC_IN_HOUR: m,
    SEC_IN_12_HOUR: n,
    SEC_IN_24_HOUR: o,
    MIN_IN_HOUR: p,
    HEARTBEAT: q
  };
}), null);
__d('UFICentralUpdates', ['Arbiter', 'BanzaiODS', 'LiveTimer', 'ShortProfiles', 'UFIConstants'], (function a(b, c, d, e, f, g) {
  'use strict';
  c('BanzaiODS').setEntitySample('feedback', .0001);
  var h = 0,
    i = {},
    j = {},
    k = [];

  function l() {
    if (!h) {
      var p = i,
        q = j;
      i = {};
      j = {};
      if (Object.keys(p).length) n('feedback-updated', p);
      if (Object.keys(q).length) n('comments-updated', q);
      k.pop();
    }
  }

  function m() {
    if (k.length) {
      return k[k.length - 1];
    } else return c('UFIConstants').UFIPayloadSourceType.UNKNOWN;
  }

  function n(event, p) {
    o.inform(event, {
      updates: p,
      payloadSource: m()
    });
  }
  var o = Object.assign(new(c('Arbiter'))(), {
    handleUpdate: function p(q, r) {
      if (Object.keys(r).length) this.synchronizeInforms(function() {
        k.push(q);
        var s = babelHelpers['extends']({
          payloadsource: m()
        }, r);
        this.inform('update-feedback', s);
        this.inform('update-comment-lists', s);
        this.inform('update-comments', s);
        this.inform('update-actions', s);
        c('ShortProfiles').setMulti(r.profiles || {});
        if (r.servertime) c('LiveTimer').restart(r.servertime);
      }.bind(this));
    },
    didUpdateFeedback: function p(q) {
      i[q] = true;
      l();
    },
    didUpdateComment: function p(q) {
      j[q] = true;
      l();
    },
    synchronizeInforms: function p(q) {
      h++;
      try {
        q();
      } catch (r) {
        throw r;
      } finally {
        h--;
        l();
      }
    }
  });
  f.exports = o;
}), null);
__d('UFICentralUpdatesLocalCommentAdapter', ['ClientIDs', 'FeedbackPayloadSourceType', 'UFICentralUpdates', 'UFIDispatcherBase'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h, i = {},
    j = (h = {}, h[c('FeedbackPayloadSourceType').USER_ACTION] = l, h[c('FeedbackPayloadSourceType').ENDPOINT_ADD_COMMENT] = m, h);

  function k() {
    return c('UFICentralUpdates').subscribe('update-comments', function(p, q) {
      if (q.comments) {
        var r = j[q.payloadsource];
        if (r) q.comments.forEach(r);
      }
    });
  }

  function l(p) {
    if (!c('ClientIDs').isExistingClientID(p.id)) return;
    i[p.id] = p.ufiinstanceid;
    c('UFIDispatcherBase').dispatch({
      type: 'CENTRALUPDATES_ADDED_COMMENT',
      instanceID: p.ufiinstanceid,
      ftentidentifier: p.ftentidentifier,
      clientID: p.id
    });
  }

  function m(p) {
    if (!c('ClientIDs').isExistingClientID(p.clientid)) return;
    var q = i[p.clientid];
    delete i[p.clientid];
    if (!q) return;
    c('UFIDispatcherBase').dispatch({
      type: 'CENTRALUPDATES_SAVED_COMMENT',
      instanceID: q,
      ftentidentifier: p.ftentidentifier,
      clientID: p.clientid,
      commentID: p.id
    });
  }
  var n = void 0,
    o = {
      subscribeOnce: function p() {
        if (!n) {
          n = k();
          return n;
        }
        return null;
      }
    };
  f.exports = o;
}), null);
__d('BadgeHelper', ['cx', 'DOM', 'joinClasses'], (function a(b, c, d, e, f, g, h) {
  var i = {
      xsmall: "_5dzz",
      small: "_5dz-",
      medium: "_5dz_",
      large: "_5d-0",
      xlarge: "_5d-1"
    },
    j = {
      verified: "_56_f",
      trending: "_1gop",
      topcommenter: "_59t2",
      page_gray_check: "_5n3t",
      work: "_5d62",
      game_blue: "_59c6",
      work_non_coworker: "_2ad7",
      interest_community: "_3qcr"
    };

  function k(m, n) {
    return c('joinClasses')(i[m], j[n], "_5dzy");
  }

  function l(m, n) {
    var o = k(m, n);
    if (o) return c('DOM').create('span', {
      className: o
    });
  }
  f.exports = {
    getClasses: k,
    renderBadge: l,
    sizes: Object.keys(i),
    types: Object.keys(j)
  };
}), null);
__d('Badge.react', ['BadgeHelper', 'React'], (function a(b, c, d, e, f, g) {
  var h, i, j = c('React').PropTypes;
  h = babelHelpers.inherits(k, c('React').Component);
  i = h && h.prototype;
  k.prototype.render = function() {
    'use strict';
    return (c('React').createElement('span', {
      className: c('BadgeHelper').getClasses(this.props.size, this.props.type)
    }));
  };

  function k() {
    'use strict';
    h.apply(this, arguments);
  }
  k.propTypes = {
    size: j.oneOf(c('BadgeHelper').sizes),
    type: j.oneOf(c('BadgeHelper').types)
  };
  k.defaultProps = {
    size: 'xsmall',
    type: 'verified'
  };
  f.exports = k;
}), null);
__d('HovercardLink', ['Bootloader', 'URI'], (function a(b, c, d, e, f, g) {
  var h = {
    getBaseURI: function i() {
      return new(c('URI'))('/ajax/hovercard/hovercard.php');
    },
    constructEndpoint: function i(j, k) {
      return h.constructEndpointWithGroupAndLocation(j, k, null);
    },
    constructEndpointWithLocation: function i(j, k) {
      return h.constructEndpointWithGroupAndLocation(j, null, k);
    },
    constructEndpointWithGroupAndLocation: function i(j, k, l, m) {
      return h.constructEndpointWithGroupLocationAndExtraParams(j, k, l, m);
    },
    constructEndpointWithGroupLocationAndExtraParams: function i(j, k, l, m) {
      var n = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4],
        o = new(c('URI'))(h.getBaseURI()).setQueryData({
          id: j.id
        }),
        p = {};
      if (n !== null)
        for (var q in n) p[q] = n[q];
      if ((j.weakreference || m) && k) p.group_id = k;
      if (l) p.hc_location = l;
      o.addQueryData({
        extragetparams: JSON.stringify(p)
      });
      return o;
    }
  };
  f.exports = h;
}), null);
__d('UnicodeBidiDirection', ['invariant'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i = 'NEUTRAL',
    j = 'LTR',
    k = 'RTL';

  function l(p) {
    return p === j || p === k;
  }

  function m(p) {
    l(p) || h(0);
    return p === j ? 'ltr' : 'rtl';
  }

  function n(p, q) {
    l(p) || h(0);
    l(q) || h(0);
    return p === q ? null : m(p);
  }
  var o = {
    NEUTRAL: i,
    LTR: j,
    RTL: k,
    isStrong: l,
    getHTMLDir: m,
    getHTMLDirIfDifferent: n
  };
  f.exports = o;
}), null);
__d('UnicodeBidiGlobalDirectionCore', ['invariant', 'UnicodeBidiDirection'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i = null;

  function j(n) {
    i = n;
  }

  function k() {
    j(c('UnicodeBidiDirection').LTR);
  }

  function l() {
    if (!i) this.initDir();
    i || h(0);
    return i;
  }
  var m = {
    setDir: j,
    initDir: k,
    getDir: l
  };
  f.exports = m;
}), null);
__d('UnicodeBidiGlobalDirection', ['Locale', 'UnicodeBidiDirection', 'UnicodeBidiGlobalDirectionCore'], (function a(b, c, d, e, f, g) {
  'use strict';
  c('UnicodeBidiGlobalDirectionCore').initDir = function() {
    c('UnicodeBidiGlobalDirectionCore').setDir(c('Locale').isRTL() ? c('UnicodeBidiDirection').RTL : c('UnicodeBidiDirection').LTR);
  };
  f.exports = c('UnicodeBidiGlobalDirectionCore');
}), null);
__d('UnicodeBidi', ['invariant', 'UnicodeBidiDirection', 'UnicodeBidiGlobalDirection'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i = {
      L: 'A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01BA\u01BB' + '\u01BC-\u01BF\u01C0-\u01C3\u01C4-\u0293\u0294\u0295-\u02AF\u02B0-\u02B8' + '\u02BB-\u02C1\u02D0-\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376-\u0377' + '\u037A\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1' + '\u03A3-\u03F5\u03F7-\u0481\u0482\u048A-\u052F\u0531-\u0556\u0559' + '\u055A-\u055F\u0561-\u0587\u0589\u0903\u0904-\u0939\u093B\u093D' + '\u093E-\u0940\u0949-\u094C\u094E-\u094F\u0950\u0958-\u0961\u0964-\u0965' + '\u0966-\u096F\u0970\u0971\u0972-\u0980\u0982-\u0983\u0985-\u098C' + '\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD' + '\u09BE-\u09C0\u09C7-\u09C8\u09CB-\u09CC\u09CE\u09D7\u09DC-\u09DD' + '\u09DF-\u09E1\u09E6-\u09EF\u09F0-\u09F1\u09F4-\u09F9\u09FA\u0A03' + '\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33' + '\u0A35-\u0A36\u0A38-\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F' + '\u0A72-\u0A74\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0' + '\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0ABE-\u0AC0\u0AC9\u0ACB-\u0ACC\u0AD0' + '\u0AE0-\u0AE1\u0AE6-\u0AEF\u0AF0\u0B02-\u0B03\u0B05-\u0B0C\u0B0F-\u0B10' + '\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40' + '\u0B47-\u0B48\u0B4B-\u0B4C\u0B57\u0B5C-\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F' + '\u0B70\u0B71\u0B72-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95' + '\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9' + '\u0BBE-\u0BBF\u0BC1-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7' + '\u0BE6-\u0BEF\u0BF0-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10' + '\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C59\u0C60-\u0C61' + '\u0C66-\u0C6F\u0C7F\u0C82-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8' + '\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CBE\u0CBF\u0CC0-\u0CC4\u0CC6' + '\u0CC7-\u0CC8\u0CCA-\u0CCB\u0CD5-\u0CD6\u0CDE\u0CE0-\u0CE1\u0CE6-\u0CEF' + '\u0CF1-\u0CF2\u0D02-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D' + '\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D60-\u0D61' + '\u0D66-\u0D6F\u0D70-\u0D75\u0D79\u0D7A-\u0D7F\u0D82-\u0D83\u0D85-\u0D96' + '\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF' + '\u0DE6-\u0DEF\u0DF2-\u0DF3\u0DF4\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45' + '\u0E46\u0E4F\u0E50-\u0E59\u0E5A-\u0E5B\u0E81-\u0E82\u0E84\u0E87-\u0E88' + '\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7' + '\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6' + '\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F01-\u0F03\u0F04-\u0F12\u0F13\u0F14' + '\u0F15-\u0F17\u0F1A-\u0F1F\u0F20-\u0F29\u0F2A-\u0F33\u0F34\u0F36\u0F38' + '\u0F3E-\u0F3F\u0F40-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C' + '\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FCF\u0FD0-\u0FD4\u0FD5-\u0FD8' + '\u0FD9-\u0FDA\u1000-\u102A\u102B-\u102C\u1031\u1038\u103B-\u103C\u103F' + '\u1040-\u1049\u104A-\u104F\u1050-\u1055\u1056-\u1057\u105A-\u105D\u1061' + '\u1062-\u1064\u1065-\u1066\u1067-\u106D\u106E-\u1070\u1075-\u1081' + '\u1083-\u1084\u1087-\u108C\u108E\u108F\u1090-\u1099\u109A-\u109C' + '\u109E-\u109F\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FB\u10FC' + '\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288' + '\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5' + '\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u1368' + '\u1369-\u137C\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166D-\u166E' + '\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EB-\u16ED\u16EE-\u16F0' + '\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1735-\u1736' + '\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5' + '\u17C7-\u17C8\u17D4-\u17D6\u17D7\u17D8-\u17DA\u17DC\u17E0-\u17E9' + '\u1810-\u1819\u1820-\u1842\u1843\u1844-\u1877\u1880-\u18A8\u18AA' + '\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930-\u1931' + '\u1933-\u1938\u1946-\u194F\u1950-\u196D\u1970-\u1974\u1980-\u19AB' + '\u19B0-\u19C0\u19C1-\u19C7\u19C8-\u19C9\u19D0-\u19D9\u19DA\u1A00-\u1A16' + '\u1A19-\u1A1A\u1A1E-\u1A1F\u1A20-\u1A54\u1A55\u1A57\u1A61\u1A63-\u1A64' + '\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AA6\u1AA7\u1AA8-\u1AAD' + '\u1B04\u1B05-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B44\u1B45-\u1B4B' + '\u1B50-\u1B59\u1B5A-\u1B60\u1B61-\u1B6A\u1B74-\u1B7C\u1B82\u1B83-\u1BA0' + '\u1BA1\u1BA6-\u1BA7\u1BAA\u1BAE-\u1BAF\u1BB0-\u1BB9\u1BBA-\u1BE5\u1BE7' + '\u1BEA-\u1BEC\u1BEE\u1BF2-\u1BF3\u1BFC-\u1BFF\u1C00-\u1C23\u1C24-\u1C2B' + '\u1C34-\u1C35\u1C3B-\u1C3F\u1C40-\u1C49\u1C4D-\u1C4F\u1C50-\u1C59' + '\u1C5A-\u1C77\u1C78-\u1C7D\u1C7E-\u1C7F\u1CC0-\u1CC7\u1CD3\u1CE1' + '\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF2-\u1CF3\u1CF5-\u1CF6\u1D00-\u1D2B' + '\u1D2C-\u1D6A\u1D6B-\u1D77\u1D78\u1D79-\u1D9A\u1D9B-\u1DBF\u1E00-\u1F15' + '\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D' + '\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC' + '\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E' + '\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D' + '\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2135-\u2138\u2139' + '\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2182\u2183-\u2184' + '\u2185-\u2188\u2336-\u237A\u2395\u249C-\u24E9\u26AC\u2800-\u28FF' + '\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C7B\u2C7C-\u2C7D\u2C7E-\u2CE4' + '\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F' + '\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE' + '\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005\u3006\u3007' + '\u3021-\u3029\u302E-\u302F\u3031-\u3035\u3038-\u303A\u303B\u303C' + '\u3041-\u3096\u309D-\u309E\u309F\u30A1-\u30FA\u30FC-\u30FE\u30FF' + '\u3105-\u312D\u3131-\u318E\u3190-\u3191\u3192-\u3195\u3196-\u319F' + '\u31A0-\u31BA\u31F0-\u31FF\u3200-\u321C\u3220-\u3229\u322A-\u3247' + '\u3248-\u324F\u3260-\u327B\u327F\u3280-\u3289\u328A-\u32B0\u32C0-\u32CB' + '\u32D0-\u32FE\u3300-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DB5' + '\u4E00-\u9FCC\uA000-\uA014\uA015\uA016-\uA48C\uA4D0-\uA4F7\uA4F8-\uA4FD' + '\uA4FE-\uA4FF\uA500-\uA60B\uA60C\uA610-\uA61F\uA620-\uA629\uA62A-\uA62B' + '\uA640-\uA66D\uA66E\uA680-\uA69B\uA69C-\uA69D\uA6A0-\uA6E5\uA6E6-\uA6EF' + '\uA6F2-\uA6F7\uA722-\uA76F\uA770\uA771-\uA787\uA789-\uA78A\uA78B-\uA78E' + '\uA790-\uA7AD\uA7B0-\uA7B1\uA7F7\uA7F8-\uA7F9\uA7FA\uA7FB-\uA801' + '\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA823-\uA824\uA827\uA830-\uA835' + '\uA836-\uA837\uA840-\uA873\uA880-\uA881\uA882-\uA8B3\uA8B4-\uA8C3' + '\uA8CE-\uA8CF\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8F8-\uA8FA\uA8FB\uA900-\uA909' + '\uA90A-\uA925\uA92E-\uA92F\uA930-\uA946\uA952-\uA953\uA95F\uA960-\uA97C' + '\uA983\uA984-\uA9B2\uA9B4-\uA9B5\uA9BA-\uA9BB\uA9BD-\uA9C0\uA9C1-\uA9CD' + '\uA9CF\uA9D0-\uA9D9\uA9DE-\uA9DF\uA9E0-\uA9E4\uA9E6\uA9E7-\uA9EF' + '\uA9F0-\uA9F9\uA9FA-\uA9FE\uAA00-\uAA28\uAA2F-\uAA30\uAA33-\uAA34' + '\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F\uAA60-\uAA6F' + '\uAA70\uAA71-\uAA76\uAA77-\uAA79\uAA7A\uAA7B\uAA7D\uAA7E-\uAAAF\uAAB1' + '\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAADD\uAADE-\uAADF' + '\uAAE0-\uAAEA\uAAEB\uAAEE-\uAAEF\uAAF0-\uAAF1\uAAF2\uAAF3-\uAAF4\uAAF5' + '\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E' + '\uAB30-\uAB5A\uAB5B\uAB5C-\uAB5F\uAB64-\uAB65\uABC0-\uABE2\uABE3-\uABE4' + '\uABE6-\uABE7\uABE9-\uABEA\uABEB\uABEC\uABF0-\uABF9\uAC00-\uD7A3' + '\uD7B0-\uD7C6\uD7CB-\uD7FB\uE000-\uF8FF\uF900-\uFA6D\uFA70-\uFAD9' + '\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF6F\uFF70' + '\uFF71-\uFF9D\uFF9E-\uFF9F\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF' + '\uFFD2-\uFFD7\uFFDA-\uFFDC',
      R: '\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05D0-\u05EA\u05EB-\u05EF' + '\u05F0-\u05F2\u05F3-\u05F4\u05F5-\u05FF\u07C0-\u07C9\u07CA-\u07EA' + '\u07F4-\u07F5\u07FA\u07FB-\u07FF\u0800-\u0815\u081A\u0824\u0828' + '\u082E-\u082F\u0830-\u083E\u083F\u0840-\u0858\u085C-\u085D\u085E' + '\u085F-\u089F\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB37\uFB38-\uFB3C' + '\uFB3D\uFB3E\uFB3F\uFB40-\uFB41\uFB42\uFB43-\uFB44\uFB45\uFB46-\uFB4F',
      AL: '\u0608\u060B\u060D\u061B\u061C\u061D\u061E-\u061F\u0620-\u063F\u0640' + '\u0641-\u064A\u066D\u066E-\u066F\u0671-\u06D3\u06D4\u06D5\u06E5-\u06E6' + '\u06EE-\u06EF\u06FA-\u06FC\u06FD-\u06FE\u06FF\u0700-\u070D\u070E\u070F' + '\u0710\u0712-\u072F\u074B-\u074C\u074D-\u07A5\u07B1\u07B2-\u07BF' + '\u08A0-\u08B2\u08B3-\u08E3\uFB50-\uFBB1\uFBB2-\uFBC1\uFBC2-\uFBD2' + '\uFBD3-\uFD3D\uFD40-\uFD4F\uFD50-\uFD8F\uFD90-\uFD91\uFD92-\uFDC7' + '\uFDC8-\uFDCF\uFDF0-\uFDFB\uFDFC\uFDFE-\uFDFF\uFE70-\uFE74\uFE75' + '\uFE76-\uFEFC\uFEFD-\uFEFE'
    },
    j = new RegExp('[' + i.L + i.R + i.AL + ']'),
    k = new RegExp('[' + i.R + i.AL + ']');

  function l(s) {
    var t = j.exec(s);
    return t == null ? null : t[0];
  }

  function m(s) {
    var t = l(s);
    if (t == null) return c('UnicodeBidiDirection').NEUTRAL;
    return k.exec(t) ? c('UnicodeBidiDirection').RTL : c('UnicodeBidiDirection').LTR;
  }

  function n(s, t) {
    t = t || c('UnicodeBidiDirection').NEUTRAL;
    if (!s.length) return t;
    var u = m(s);
    return u === c('UnicodeBidiDirection').NEUTRAL ? t : u;
  }

  function o(s, t) {
    if (!t) t = c('UnicodeBidiGlobalDirection').getDir();
    c('UnicodeBidiDirection').isStrong(t) || h(0);
    return n(s, t);
  }

  function p(s, t) {
    return o(s, t) === c('UnicodeBidiDirection').LTR;
  }

  function q(s, t) {
    return o(s, t) === c('UnicodeBidiDirection').RTL;
  }
  var r = {
    firstStrongChar: l,
    firstStrongCharDir: m,
    resolveBlockDir: n,
    getDirection: o,
    isDirectionLTR: p,
    isDirectionRTL: q
  };
  f.exports = r;
}), null);
__d('isRTL', ['UnicodeBidi', 'UnicodeBidiDirection'], (function a(b, c, d, e, f, g) {
  function h(i) {
    return c('UnicodeBidi').getDirection(i) === c('UnicodeBidiDirection').RTL;
  }
  f.exports = h;
}), null);
__d('HovercardLinkInterpolator', ['cx', 'fbt', 'Badge.react', 'HovercardLink', 'Link.react', 'React', 'URI', 'isFacebookURI', 'isRTL'], (function a(b, c, d, e, f, g, h, i) {
  function j(k, l, m, n, o) {
    var p = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5],
      q = l.entity,
      r = m || (q.external ? '_blank' : null),
      s, t = (!q.external ? "profileLink" : '') + (q.weakreference ? ' ' + "weakReference" : ''),
      u, v = q.hashtag ? k.substring(1) : k;
    u = c('isRTL')(v) ? 'rtl' : 'ltr';
    var w = new(c('URI'))(q.url);
    if (c('isFacebookURI')(w)) w.addQueryData({
      hc_location: o
    });
    var x = q.shimhash ? q.shimhash : null,
      y = !q.external && !q.hashtag && !q.photo && !q.note && !q.video,
      z = y ? {
        'data-hovercard': c('HovercardLink').constructEndpointWithGroupLocationAndExtraParams(q, n, o, null, p).toString()
      } : {};
    if (q.hashtag) {
      s = c('React').createElement('a', babelHelpers['extends']({}, z, {
        className: "_58cn",
        dir: u,
        href: w.toString(),
        target: r
      }), c('React').createElement('span', {
        'aria-label': i._("hashtag"),
        className: "_58cl"
      }, k.substring(0, 1)), c('React').createElement('span', {
        className: "_58cm"
      }, k.substring(1)));
    } else {
      var aa = [];
      if (q.weakreference) aa.push(c('React').createElement('i', {
        key: 'weakreference',
        className: 'UFIWeakReferenceIcon'
      }));
      aa.push(k);
      if (q.noncoworker) aa.push(c('React').createElement(c('Badge.react'), {
        key: 'noncoworker',
        type: 'work_non_coworker'
      }));
      s = c('React').createElement(c('Link.react'), babelHelpers['extends']({}, z, {
        className: t,
        dir: u,
        href: {
          url: w.toString(),
          shimhash: x
        },
        target: r
      }), aa);
    }
    return s;
  }
  f.exports = j;
}), null);
__d('UFIVideoPlayerRegistry', ['EventEmitter', 'Map', 'Set', 'VideoPlayerReason', 'ViewportBounds', 'getOrCreateDOMID', 'destroyOnUnload'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = new(c('EventEmitter'))(),
    i = new(c('Map'))(),
    j = new(c('Map'))(),
    k = new(c('Map'))(),
    l = new(c('Map'))(),
    m = new(c('Set'))();
  c('destroyOnUnload')(function() {
    h.removeAllListeners();
    i.clear();
    j.clear();
    k.clear();
    l.clear();
    m.clear();
  });

  function n(q) {
    var r = q,
      s = [];
    while (r) {
      s.unshift(r);
      r = r.parentElement;
    }
    return s;
  }

  function o(q, r) {
    var s = n(q),
      t = null,
      u = null;
    r.forEach(function(v) {
      var w = v[0],
        x = v[1],
        y = n(w);
      for (var z = 0; z < s.length; ++z)
        if (s[z] !== y[z]) {
          if (u === null || z > u) {
            u = z;
            t = x;
          }
          break;
        }
    });
    return t;
  }
  var p = {
    registerVideoPlayerController: function q(r) {
      var s = r.getVideoID(),
        t = l.get(s);
      if (t) {
        t.push(r);
      } else {
        t = [r];
        l.set(s, t);
        k['delete'](s);
      }
      m.forEach(function(v) {
        return v();
      });
      var u = i.get(s);
      if (!u) return;
      u.forEach(function(v) {
        return (this._associateUFIController(v, s));
      }.bind(this));
    },
    addOnRegisterListener: function q(r) {
      m.add(r);
    },
    removeOnRegisterListener: function q(r) {
      m['delete'](r);
    },
    getAvailableVideoPlayerController: function q(r) {
      return j.get(r);
    },
    seekAvailableVideoPlayerController: function q(r, s) {
      var t = p.getAvailableVideoPlayerController(r);
      if (!t) return;
      if (['ready', 'playing', 'paused', 'finished'].includes(t.getState())) {
        t.pause(c('VideoPlayerReason').SEEK);
        t.seek(s);
        t.play(c('VideoPlayerReason').SEEK);
      }
    },
    scrollToAvailableVideo: function q(r) {
      var s = p.getAvailableVideoPlayerController(r);
      if (!s) return;
      var t = c('ViewportBounds').getElementPosition(s.getRootNode());
      window.scroll(0, t.y);
    },
    setAvailableVideoPlayerControllerSphericalViewport: function q(r, s) {
      var t = p.getAvailableVideoPlayerController(r);
      if (!t) return;
      t.emit('SphericalVideoViewportTagComment/click', s);
    },
    getAvailableVideoPlayerControllerForElement: function q(r, s) {
      var t = k.get(s) || new(c('Map'))(),
        u = c('getOrCreateDOMID')(r),
        v = t.get(u) || this._findVideoPlayerControllerForElement(r, s);
      t.set(u, v);
      k.set(s, t);
      return v;
    },
    getAvailableVideoPlayerControllerTimeForElement: function q(r, s) {
      var t = p.getAvailableVideoPlayerControllerForElement(r, s);
      if (!t) return null;
      var u = t.getCurrentTimePosition();
      if (u >= 0) return Math.floor(u);
      return null;
    },
    getAvailableVideoPlayerControllerTime: function q(r) {
      var s = p.getAvailableVideoPlayerController(r);
      if (!s) return null;
      var t = s.getCurrentTimePosition();
      if (t >= 0) return Math.floor(t);
      return null;
    },
    registerUFIController: function q(r, s, t) {
      var u = r.getInstanceID(),
        v = r.getFluentContentToken();
      if (!v) return;
      var w = i.get(v);
      if (w) {
        w.push(r);
      } else {
        w = [r];
        i.set(v, w);
      }
      h.addListener(u + '/register', s);
      h.addListener(u + '/unregister', t);
      this._associateUFIController(r, v);
    },
    _findVideoPlayerControllerForElement: function q(r, s) {
      var t = l.get(s);
      if (!t) return null;
      if (t.length === 1) return t[0];
      return o(r, t.map(function(u) {
        return [u.getRootNode(), u];
      }));
    },
    _associateUFIController: function q(r, s) {
      var t = r.getInstanceID(),
        u = this._findVideoPlayerControllerForElement(r.getRootNode(), s);
      if (!u) return;
      var v = j.get(t);
      if (v) {
        if (c('getOrCreateDOMID')(v.getRootNode()) === c('getOrCreateDOMID')(u.getRootNode())) return;
        h.emit(t + '/unregister');
      }
      j.set(t, u);
      h.emit(t + '/register', u);
    }
  };
  f.exports = p;
}), null);
__d('URITruncator', ['fbt', 'URI'], (function a(b, c, d, e, f, g, h) {
  var i = 3,
    j = h._("..."),
    k = j.length || j.toString().length;

  function l(m, n) {
    if (!m || n === undefined || m.length <= n || n <= k || m.toString().length <= k) return m;
    if (!c('URI').isValidURI(m)) return m.substring(0, n - k) + j;
    var o = new(c('URI'))(m),
      p = o.getOrigin();
    if (p.length > n - k) return p.substring(0, n - k) + j;
    var q = false;
    if (!!o.getFragment()) {
      q = true;
      o.setFragment('');
      if (o.toString().length <= n - k) return o.toString() + j;
    }
    var r = o.getQueryData();
    if (r) {
      var s = Object.keys(r);
      if (s.length > 0) {
        q = true;
        for (var t = s.length - 1; t >= 0; t--) {
          o.removeQueryData(s[t]);
          if (o.toString().length <= n - k) return o.toString() + j;
        }
      }
    }
    var u = o.getPath() + (q ? j : ''),
      v = u.split('/'),
      w = p.length + u.length - n,
      x = 0;
    while (w > 0 && v.length > x + 1) {
      var y = x + 1,
        z = v[y];
      if (w + k + i <= z.length) {
        var aa = z.length - 1,
          ba = z.length - w - k,
          ca = /[a-zA-Z0-9]/;
        w += k;
        while (w > 0) {
          while (aa > 0 && ca.test(z[aa])) {
            aa--;
            w--;
          }
          while (aa > 0 && !ca.test(z[aa])) {
            aa--;
            w--;
          }
        }
        if (aa === 0) aa = ba - 1;
        v[y] = z.substring(0, aa + 1) + j;
      } else {
        x++;
        w -= z.length;
        if (x === 1) {
          w += k;
        } else w--;
      }
    }
    if (x > 0) {
      if (v[v.length - 1].length === 0 && v.length === x + 2) x++;
      v.splice(1, x, j);
    }
    var da = p + v.join('/');
    if (da.length > n) da = da.substring(0, n - k) + j;
    return da;
  }
  f.exports = l;
}), null);
__d('VideoTimestampsClicksWWWTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
  'use strict';

  function h() {
    this.clear();
  }
  h.prototype.log = function() {
    c('GeneratedLoggerUtils').log('logger:VideoTimestampsClicksWWWLoggerConfig', this.$VideoTimestampsClicksWWWTypedLogger1, c('Banzai').BASIC);
  };
  h.prototype.logVital = function() {
    c('GeneratedLoggerUtils').log('logger:VideoTimestampsClicksWWWLoggerConfig', this.$VideoTimestampsClicksWWWTypedLogger1, c('Banzai').VITAL);
  };
  h.prototype.clear = function() {
    this.$VideoTimestampsClicksWWWTypedLogger1 = {};
    return this;
  };
  h.prototype.updateData = function(j) {
    this.$VideoTimestampsClicksWWWTypedLogger1 = babelHelpers['extends']({}, this.$VideoTimestampsClicksWWWTypedLogger1, j);
    return this;
  };
  h.prototype.setCommentID = function(j) {
    this.$VideoTimestampsClicksWWWTypedLogger1.comment_id = j;
    return this;
  };
  h.prototype.setIsContentTimestamp = function(j) {
    this.$VideoTimestampsClicksWWWTypedLogger1.is_content_timestamp = j;
    return this;
  };
  h.prototype.setLocalCommentFeedbackID = function(j) {
    this.$VideoTimestampsClicksWWWTypedLogger1.local_comment_feedback_id = j;
    return this;
  };
  h.prototype.setVC = function(j) {
    this.$VideoTimestampsClicksWWWTypedLogger1.vc = j;
    return this;
  };
  h.prototype.setVideoTimestamp = function(j) {
    this.$VideoTimestampsClicksWWWTypedLogger1.video_timestamp = j;
    return this;
  };
  var i = {
    comment_id: true,
    is_content_timestamp: true,
    local_comment_feedback_id: true,
    vc: true,
    video_timestamp: true
  };
  f.exports = h;
}), null);
__d('UnicodeUtils', ['invariant'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i = 55296,
    j = 56319,
    k = 56320,
    l = 57343,
    m = /[\uD800-\uDFFF]/;

  function n(w) {
    return i <= w && w <= l;
  }

  function o(w, x) {
    0 <= x && x < w.length || h(0);
    if (x + 1 === w.length) return false;
    var y = w.charCodeAt(x),
      z = w.charCodeAt(x + 1);
    return (i <= y && y <= j && k <= z && z <= l);
  }

  function p(w) {
    return m.test(w);
  }

  function q(w, x) {
    return 1 + n(w.charCodeAt(x));
  }

  function r(w) {
    if (!p(w)) return w.length;
    var x = 0;
    for (var y = 0; y < w.length; y += q(w, y)) x++;
    return x;
  }

  function s(w, x, y) {
    x = x || 0;
    y = y === undefined ? Infinity : y || 0;
    if (!p(w)) return w.substr(x, y);
    var z = w.length;
    if (z <= 0 || x > z || y <= 0) return '';
    var aa = 0;
    if (x > 0) {
      for (; x > 0 && aa < z; x--) aa += q(w, aa);
      if (aa >= z) return '';
    } else if (x < 0) {
      for (aa = z; x < 0 && 0 < aa; x++) aa -= q(w, aa - 1);
      if (aa < 0) aa = 0;
    }
    var ba = z;
    if (y < z)
      for (ba = aa; y > 0 && ba < z; y--) ba += q(w, ba);
    return w.substring(aa, ba);
  }

  function t(w, x, y) {
    x = x || 0;
    y = y === undefined ? Infinity : y || 0;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    var z = Math.abs(y - x);
    x = x < y ? x : y;
    return s(w, x, z);
  }

  function u(w) {
    var x = [];
    for (var y = 0; y < w.length; y += q(w, y)) x.push(w.codePointAt(y));
    return x;
  }
  var v = {
    getCodePoints: u,
    getUTF16Length: q,
    hasSurrogateUnit: p,
    isCodeUnitInSurrogateRange: n,
    isSurrogatePair: o,
    strlen: r,
    substring: t,
    substr: s
  };
  f.exports = v;
}), null);
__d('transformTextRanges', ['UnicodeUtils'], (function a(b, c, d, e, f, g) {
  var h = function i(j, k, l) {
    if (!j || !k || !l) return j;
    k.sort(function(s, t) {
      return s.offset - t.offset;
    });
    var m = 0;
    for (var n = 0; n < k.length; n++) {
      k[n].offset += m;
      var o = c('UnicodeUtils').substr(j, k[n].offset, k[n].length),
        p = c('UnicodeUtils').strlen(o),
        q = l(o, k[n]),
        r = c('UnicodeUtils').strlen(q);
      if (o !== q) {
        j = c('UnicodeUtils').substr(j, 0, k[n].offset) + q + c('UnicodeUtils').substr(j, k[n].offset + k[n].length);
        k[n].length = r;
        m += r - p;
      }
    }
    return j;
  };
  f.exports = h;
}), null);
__d('UFICommentUtils', ['cx', 'Bootloader', 'HovercardLinkInterpolator', 'React', 'UFIConstants', 'UFIVideoPlayerRegistry', 'URI', 'URITruncator', 'VideoTimestampsClicksWWWTypedLogger', 'joinClasses', 'transformTextRanges'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i = {
    timeToTimestamp: function j(k) {
      var l = Math.floor(k / 3600),
        m = l ? l + ':' : '';
      m += ((l ? '0' : '') + Math.floor(k % 3600 / 60)).slice(-2) + ':';
      return m + ('0' + k % 60).slice(-2);
    },
    getCommentTextWithTruncatedURIs: function j(k, l) {
      if (c('UFIConstants').commentURLTruncationLength)
        if (k && k.length > 0) l = c('transformTextRanges')(l, k, function(m, n) {
          var o = n.entity.external || n.entity.__type__ && n.entity.__type__.name === 'ExternalUrl';
          return o ? c('URITruncator')(m, c('UFIConstants').commentURLTruncationLength) : m;
        });
      return l;
    },
    getCommentBodyInterpolator: function j(k, l, m, n) {
      return function(o, p) {
        if (p.videoTimestamp) {
          if (n) return c('React').createElement('span', null, p.entity);
          var q = function v(w) {
            w.preventDefault();
            new(c('VideoTimestampsClicksWWWTypedLogger'))().setVideoTimestamp(p.integerTimestamp).setCommentID(m).setIsContentTimestamp(false).log();
            if (l) {
              c('UFIVideoPlayerRegistry').seekAvailableVideoPlayerController(l, p.integerTimestamp);
              c('UFIVideoPlayerRegistry').scrollToAvailableVideo(l);
            }
            return false;
          };
          return c('React').createElement('a', {
            className: "TimestampLink",
            onClick: q,
            href: '#'
          }, p.entity);
        } else if (p.sphericalViewport) {
          var r = function v(w) {
            w.preventDefault();
            if (l) c('UFIVideoPlayerRegistry').setAvailableVideoPlayerControllerSphericalViewport(l, {
              yaw: p.yaw,
              pitch: p.pitch
            });
            return false;
          };
          return (c('React').createElement('a', {
            onClick: r,
            href: '#'
          }, p.entity));
        } else if (p.sphericalViewportAndTimestamp) {
          var s = function v(w) {
            w.preventDefault();
            if (l) {
              c('UFIVideoPlayerRegistry').setAvailableVideoPlayerControllerSphericalViewport(l, {
                yaw: p.yaw,
                pitch: p.pitch
              });
              c('UFIVideoPlayerRegistry').seekAvailableVideoPlayerController(l, p.integerTimestamp);
            }
            return false;
          };
          return (c('React').createElement('a', {
            onClick: s,
            href: '#'
          }, p.entity));
        } else if (p.entity && p.entity.__type__ == 'EntTextDelightCampaign') {
          var t = "_3i-x";
          if (p.shouldHighlight) t = c('joinClasses')(t, "_3i-y");
          var u = null;
          if (p.animationURI) u = function v(w) {
            w.preventDefault();
            c('Bootloader').loadModules(["TextDelightAnimation"], function(x) {
              x.playCommentAnimation(p.animationURI);
            }, 'UFICommentUtils');
          };
          return c('React').createElement('span', {
            className: t,
            onClick: u
          }, o);
        } else return c('HovercardLinkInterpolator')(o, p, '_blank', k, 'ufi');
      };
    },
    shallowCopyRanges: function j(k) {
      if (!k) return k;
      var l = [];
      k.forEach(function(m) {
        l.push(babelHelpers['extends']({}, m));
      });
      return l;
    },
    annotateProfileURIIfPublic: function j(k, l) {
      if (!k) return l;
      return new(c('URI'))(l).addQueryData('rc', 'p').toString();
    },
    shouldShowTranslateAll: function j(k, l, m, n) {
      if (!k) return false;
      var o = 0,
        p = void 0,
        q = void 0;
      for (var r = 0; r < k.length; r++) {
        p = k[r];
        if (p.istranslatable && !p.translationdata && !n[p.id]) o++;
        if (o > 1) return true;
        if (m[p.id]) {
          q = l ? l[p.id] : [];
          for (var s = 0; s < q.length; s++) {
            p = q[s];
            if (p.istranslatable && !p.translationdata && !n[p.id]) o++;
            if (o > 1) return true;
          }
        }
      }
      return false;
    }
  };
  f.exports = i;
}), null);
__d('UFIUIEvents', [], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = 'UFIUIEvents/ufiActionAddComment',
    i = 'UFIUIEvents/ufiActionLinkLike',
    j = 'ufi/blur',
    k = 'ufi/changed',
    l = 'ufi/comment',
    m = 'CommentUFI.Pager',
    n = 'ufi/focus',
    o = 'ufi/inputHeightChanged',
    p = 'ufi/page_cleared',
    q = 'ufi/photoPreviewHightChanged',
    r = 'ufi/translationRendered',
    s = 'ufi/reactionButtonClicked',
    t = 'ufi/autoplayLiveComments',
    u = {
      ActionAddComment: h,
      ActionLinkLike: i,
      AutoplayLiveComments: t,
      Blur: j,
      Changed: k,
      Comment: l,
      CommentPager: m,
      Focus: n,
      InputHeightChanged: o,
      PageCleared: p,
      PhotoPreviewHeightChanged: q,
      TranslationRendered: r,
      ReactionButtonClicked: s
    };
  f.exports = u;
}), null);
__d('setByPath', ['invariant'], (function a(b, c, d, e, f, g, h) {
  'use strict';

  function i(j, k, l) {
    var m = j;
    for (var n = 0; n < k.length; n++) {
      var o = k[n];
      if (n === k.length - 1) {
        m[o] = l;
        return;
      }
      if (!m.hasOwnProperty(o)) {
        m[o] = {};
      } else if (m[o] == null) {
        m[o] = {};
      } else Array.isArray(m[o]) || Object.prototype.toString.call(m[o]) === '[object Object]' || h(0);
      m = m[o];
    }
  }
  f.exports = i;
}), null);
__d('UFILocallyComposedCommentStore', ['invariant', 'ClientIDs', 'FluxReduceStore', 'UFIAddCommentActionType', 'UFICentralUpdatesLocalCommentAdapter', 'UFIDispatcherBase', 'setByPath'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i, j;

  function k(m) {
    return babelHelpers['extends']({}, m);
  }
  i = babelHelpers.inherits(l, c('FluxReduceStore'));
  j = i && i.prototype;

  function l(m) {
    j.constructor.call(this, m);
    var n = c('UFICentralUpdatesLocalCommentAdapter').subscribeOnce();
  }
  l.prototype.getInitialState = function() {
    return {};
  };
  l.prototype.getStateForInstance = function(m) {
    return this.getState()[m] || {};
  };
  l.prototype.reduce = function(m, n) {
    switch (n.type) {
      case 'CENTRALUPDATES_ADDED_COMMENT':
        c('ClientIDs').isExistingClientID(n.clientID) || h(0);
        m = k(m);
        c('setByPath')(m, [n.instanceID, n.clientID], true);
        return m;
      case 'CENTRALUPDATES_SAVED_COMMENT':
        c('ClientIDs').isExistingClientID(n.clientID) || h(0);
        m = k(m);
        c('setByPath')(m, [n.instanceID, n.commentID], true);
        delete m[n.instanceID][n.clientID];
        return m;
      case c('UFIAddCommentActionType').SUBMIT_EDIT:
        m = k(m);
        c('setByPath')(m, [n.instanceID, n.comment.id], true);
        return m;
    }
    return m;
  };
  f.exports = new l(c('UFIDispatcherBase'));
}), null);
__d('Newline.react', ['React'], (function a(b, c, d, e, f, g) {
  var h, i;
  h = babelHelpers.inherits(j, c('React').Component);
  i = h && h.prototype;
  j.prototype.render = function() {
    'use strict';
    return c('React').createElement('br', this.props);
  };

  function j() {
    'use strict';
    h.apply(this, arguments);
  }
  f.exports = j;
}), null);
__d('Text.react', ['React'], (function a(b, c, d, e, f, g) {
  var h, i;
  h = babelHelpers.inherits(j, c('React').Component);
  i = h && h.prototype;
  j.prototype.render = function() {
    'use strict';
    return (c('React').createElement('span', this.props, this.props.children));
  };

  function j() {
    'use strict';
    h.apply(this, arguments);
  }
  f.exports = j;
}), null);
__d('BaseTextWithEntities.react', ['Newline.react', 'React', 'ReactFragment', 'Text.react', 'UnicodeUtils'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h, i, j = c('React').PropTypes;

  function k(o, p) {
    return o.offset - p.offset;
  }
  var l = /(\r\n|[\r\n])/,
    m = j.shape({
      length: j.number.isRequired,
      offset: j.number.isRequired
    });
  h = babelHelpers.inherits(n, c('React').Component);
  i = h && h.prototype;

  function n() {
    var o, p;
    for (var q = arguments.length, r = Array(q), s = 0; s < q; s++) r[s] = arguments[s];
    return p = (o = i.constructor).call.apply(o, [this].concat(r)), this.$BaseTextWithEntities1 = function() {
      return [].concat(this.props.ranges, this.props.aggregatedRanges, this.props.imageRanges, this.props.metaRanges, this.props.inlineStyleRanges).filter(function(t) {
        return t != null;
      }).sort(k);
    }.bind(this), this.$BaseTextWithEntities2 = function(t) {
      var u = t.split(l),
        v = {};
      for (var w = 0; w < u.length; w++) {
        var x = u[w];
        if (x) {
          var y = 'text' + w;
          if (w % 2 === 1) {
            v[y] = c('React').createElement(c('Newline.react'), null);
          } else v[y] = this.props.textRenderer(u[w]);
        }
      }
      return c('ReactFragment').create(v);
    }.bind(this), p;
  }
  n.prototype.render = function() {
    var o = 0,
      p = this.props.text,
      q = this.$BaseTextWithEntities1(),
      r = {},
      s = q.length;
    for (var t = 0, u = s; t < u; t++) {
      var v = q[t];
      if (v.offset < o) continue;
      if (v.offset > o) r['text' + t] = this.$BaseTextWithEntities2(c('UnicodeUtils').substring(p, o, v.offset));
      var w = c('UnicodeUtils').substr(p, v.offset, v.length);
      r['range' + t] = this.props.rangeRenderer(w, v);
      o = v.offset + v.length;
    }
    if (p.length > o) r.end = this.$BaseTextWithEntities2(c('UnicodeUtils').substr(p, o));
    return (c('React').createElement(c('Text.react'), {
      className: this.props.className,
      style: this.props.style
    }, c('ReactFragment').create(r)));
  };
  n.propTypes = {
    aggregatedRanges: j.array,
    imageRanges: j.array,
    inlineStyleRanges: j.array,
    metaRanges: j.array,
    rangeRenderer: j.func.isRequired,
    ranges: j.arrayOf(m),
    text: j.string.isRequired,
    textRenderer: j.func.isRequired
  };
  f.exports = n;
}), null);
__d('TextWithEmoticons.react', ['TextWithEmoticonsContainer'], (function a(b, c, d, e, f, g) {
  f.exports = c('TextWithEmoticonsContainer').module;
}), null);
__d('TextWithEntities.react', ['BaseTextWithEntities.react', 'Link.react', 'React', 'TextWithEmoticons.react'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h, i;

  function j(l) {
    return l.replace(/<3\b|&hearts;/g, '\u2665');
  }
  h = babelHelpers.inherits(k, c('React').Component);
  i = h && h.prototype;

  function k() {
    var l, m;
    for (var n = arguments.length, o = Array(n), p = 0; p < n; p++) o[p] = arguments[p];
    return m = (l = i.constructor).call.apply(l, [this].concat(o)), this.$TextWithEntities1 = function(q) {
      if (this.props.renderEmoticons || this.props.renderEmoji) {
        return (c('React').createElement(c('TextWithEmoticons.react'), {
          text: q,
          renderEmoticons: this.props.renderEmoticons,
          renderEmoji: this.props.renderEmoji
        }));
      } else return j(q);
    }.bind(this), this.$TextWithEntities2 = function(q, r) {
      if (this.props.interpolator) {
        return this.props.interpolator(q, r);
      } else if (r.entity) {
        return (c('React').createElement(c('Link.react'), {
          href: r.entity
        }, q));
      } else return q;
    }.bind(this), m;
  }
  k.prototype.render = function() {
    return (c('React').createElement(c('BaseTextWithEntities.react'), babelHelpers['extends']({}, this.props, {
      textRenderer: this.$TextWithEntities1,
      rangeRenderer: this.$TextWithEntities2,
      ranges: this.props.ranges,
      imageRanges: this.props.imageRanges,
      aggregatedRanges: this.props.aggregatedRanges,
      metaRanges: this.props.metaRanges,
      text: this.props.text
    })));
  };
  f.exports = k;
}), null);
__d('SeeMore.react', ['cx', 'fbt', 'React', 'joinClasses'], (function a(b, c, d, e, f, g, h, i) {
  var j, k;
  j = babelHelpers.inherits(l, c('React').Component);
  k = j && j.prototype;

  function l() {
    var m, n;
    'use strict';
    for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
    return n = (m = k.constructor).call.apply(m, [this].concat(p)), this.state = {
      isCollapsed: true
    }, this.handleClick = function(r) {
      if (this.props.clickCallback !== null) this.props.clickCallback(r);
      this.setState({
        isCollapsed: false
      });
    }.bind(this), n;
  }
  l.prototype.render = function() {
    'use strict';
    var m = this.state.isCollapsed,
      n = this.props.exposeTextInHtml,
      o = null;
    if (m) {
      var p = null;
      if (this.props.allowSeeMoreLinebreak) p = c('React').createElement('span', {
        className: "_1ipe",
        role: 'hidden'
      }, ' ');
      o = c('React').createElement('span', {
        className: "_5uzb"
      }, i._("..."), p);
    }
    var q = this.props.children[0],
      r = null;
    if (m) {
      if (n) r = c('React').createElement('span', {
        className: "_1x3s"
      }, this.props.children[1]);
    } else r = c('React').createElement('span', null, this.props.children[1]);
    var s = !m ? null : c('React').createElement('a', {
      className: "_5v47 fss",
      onClick: this.handleClick,
      href: '#',
      role: 'button'
    }, i._("See More"));
    return (c('React').createElement('span', {
      className: c('joinClasses')(this.props.className, "_1n4g")
    }, q, o, s, r));
  };
  l.defaultProps = {
    clickCallback: null,
    exposeTextInHtml: false,
    allowSeeMoreLinebreak: false
  };
  f.exports = l;
}), null);
__d('findSplitPointForText', [], (function a(b, c, d, e, f, g) {
  function h(i, j, k) {
    var l = null,
      m = i.split('\n');
    if (j && i.length > j) l = j;
    if (k && m.length > k) {
      var n = m.slice(0, k).join('\n').length;
      if (l !== null) {
        l = Math.min(n, l);
      } else l = n;
    }
    return l;
  }
  f.exports = h;
}), null);
__d("partitionTextAndRanges", [], (function a(b, c, d, e, f, g) {
  function h(k, l) {
    var m = k.offset + k.length;
    return l > k.offset && l < m;
  }

  function i(k, l) {
    for (var m = 0; m < k.length; m++) {
      var n = k[m];
      if (h(n, l)) return n.offset;
    }
    return l;
  }
  var j = function k(l, m, n) {
    var o = [],
      p = [],
      q = i(m, n);
    for (var r = 0; r < m.length; r++) {
      var s = m[r];
      if (s.offset < q) {
        o.push(s);
      } else p.push(babelHelpers["extends"]({}, s, {
        offset: s.offset - q
      }));
    }
    return {
      before: {
        ranges: o,
        text: l.substr(0, q)
      },
      after: {
        ranges: p,
        text: l.substr(q)
      }
    };
  };
  f.exports = j;
}), null);
__d('TruncatedTextWithEntities.react', ['React', 'SeeMore.react', 'TextWithEntities.react', 'findSplitPointForText', 'partitionTextAndRanges'], (function a(b, c, d, e, f, g) {
  var h, i, j = 30;
  h = babelHelpers.inherits(k, c('React').Component);
  i = h && h.prototype;

  function k() {
    var l, m;
    'use strict';
    for (var n = arguments.length, o = Array(n), p = 0; p < n; p++) o[p] = arguments[p];
    return m = (l = i.constructor).call.apply(l, [this].concat(o)), this.$TruncatedTextWithEntities1 = function(q) {
      if (!this.props.allowSeeMoreLinebreakOnLongWords || !q) return false;
      if (q.length <= j) return false;
      var r = /(^|\s)(\S+)$/,
        s = r.exec(q),
        t = s ? s[2] : null;
      return !!(t && t.length > j);
    }.bind(this), m;
  }
  k.prototype.render = function() {
    'use strict';
    var l = this.props.text || '',
      m = this.props.ranges || [];
    l = l.replace(/\s*$/, '');
    var n = this.props.maxLines,
      o = this.props.maxLength;
    if (o && l.length > o) {
      var p = this.props.truncationPercent || .6;
      o = Math.floor(p * o);
    }
    var q = null;
    if (!this.props.shouldExpand) q = c('findSplitPointForText')(l, o, n);
    if (q !== null) {
      while (l[q - 1] === '\n') q--;
      var r = c('partitionTextAndRanges')(l, m, q),
        s = this.$TruncatedTextWithEntities1(r.before.text);
      return (c('React').createElement('span', {
        'data-ft': this.props['data-ft'],
        dir: this.props.dir,
        lang: this.props.lang
      }, c('React').createElement(c('SeeMore.react'), {
        className: this.props.className,
        clickCallback: this.props.markViewerHasInteracted,
        allowSeeMoreLinebreak: s
      }, c('React').createElement(c('TextWithEntities.react'), {
        interpolator: this.props.interpolator,
        ranges: r.before.ranges,
        aggregatedRanges: this.props.aggregatedRanges,
        text: r.before.text,
        renderEmoticons: this.props.renderEmoticons,
        renderEmoji: this.props.renderEmoji
      }), c('React').createElement(c('TextWithEntities.react'), {
        interpolator: this.props.interpolator,
        ranges: r.after.ranges,
        aggregatedRanges: this.props.aggregatedRanges,
        text: r.after.text,
        renderEmoticons: this.props.renderEmoticons,
        renderEmoji: this.props.renderEmoji
      }))));
    } else return (c('React').createElement('span', {
      'data-ft': this.props['data-ft'],
      dir: this.props.dir,
      lang: this.props.lang
    }, c('React').createElement(c('TextWithEntities.react'), {
      className: this.props.className,
      interpolator: this.props.interpolator,
      ranges: m,
      imageRanges: this.props.imageRanges,
      aggregatedRanges: this.props.aggregatedRanges,
      text: l,
      renderEmoticons: this.props.renderEmoticons,
      renderEmoji: this.props.renderEmoji
    })));
  };
  f.exports = k;
}), null);
__d('UFIActor.react', ['ix', 'cx', 'fbt', 'Badge.react', 'Focus', 'HovercardLink', 'Image.react', 'Link.react', 'Locale', 'React', 'ReactDOM', 'UFICommentUtils', 'UserHovercardLocation', 'fbglyph'], (function a(b, c, d, e, f, g, h, i, j) {
  'use strict';
  var k, l, m = c('React').PropTypes;
  k = babelHelpers.inherits(n, c('React').Component);
  l = k && k.prototype;
  n.prototype.componentDidMount = function() {
    if (this.props.focusOnMount) c('Focus').setWithoutOutline(c('ReactDOM').findDOMNode(this.refs.authorName));
  };
  n.prototype.render = function() {
    var o = this.props.author,
      p = c('Locale').isRTL() ? 'rtl' : 'ltr',
      q = (this.props.isAuthorWeakReference ? "weakReference" : '') + (' ' + "UFICommentActorName"),
      r = [];
    if (this.props.isAuthorWeakReference) r.push(c('React').createElement('i', {
      className: 'UFIWeakReferenceIcon',
      key: 'icon'
    }));
    if (this.props.useFirstName) {
      r.push(o.firstName);
    } else if (this.props.author.isBusinessPersona && this.props.author.assetRole) {
      r.push(o.name + ' ' + j._("(") + this.props.author.assetRole + j._(")"));
    } else r.push(o.name);
    if (this.props.isAuthorNonCoworker) r.push(c('React').createElement(c('Badge.react'), {
      key: 'noncoworker',
      type: 'work_non_coworker'
    }));
    if (this.props.memberBioBadgeURI != null) r.push(c('React').createElement(c('Link.react'), {
      href: this.props.memberBioBadgeURI
    }, c('React').createElement(c('Image.react'), {
      className: "_5lek",
      key: 'memberbio',
      src: h("116571")
    })));
    if (this.props.groupMemberTag != null) r.push(c('React').createElement('span', {
      className: "_4bo_",
      key: 'membertag'
    }, this.props.groupMemberTag));
    var s = this.props.isAdminViewer ? c('UserHovercardLocation').UFI_ADMIN : c('UserHovercardLocation').UFI,
      t = o.uri && !this.props.disableAuthorLink ? c('React').createElement('a', babelHelpers['extends']({}, this.props, {
        className: q,
        'data-hovercard': this.props.showHovercard ? c('HovercardLink').constructEndpointWithGroupLocationAndExtraParams(o, this.props.groupOrEventID, s, this.props.isAuthorWeakReference, {
          is_public: this.props.isPublic
        }).toString() : null,
        'data-ft': this.props['data-ft'],
        dir: p,
        href: c('UFICommentUtils').annotateProfileURIIfPublic(this.props.isPublic, o.uri),
        ref: 'authorName'
      }), r) : c('React').createElement('span', {
        className: q,
        dir: p,
        ref: 'authorName'
      }, r);
    return (c('React').createElement('span', null, t, c('React').Children.map(this.props.children, function(u) {
      return (u ? [u.key === 'badge' || u.key === 'constituentTitle' ? '' : this.props.delimiter, u] : null);
    }.bind(this))));
  };

  function n() {
    k.apply(this, arguments);
  }
  n.propTypes = {
    author: m.object.isRequired,
    'data-ft': m.string,
    disableAuthorLink: m.bool,
    focusOnMount: m.bool,
    showHovercard: m.bool,
    isAdminViewer: m.bool,
    isAuthorWeakReference: m.bool,
    isAuthorNonCoworker: m.bool,
    memberBioBadgeURI: m.string,
    groupMemberTag: m.string,
    groupOrEventID: m.string,
    useFirstName: m.bool,
    delimiter: m.string,
    isPublic: m.bool
  };
  n.defaultProps = {
    delimiter: ' \u00b7 ',
    isAdminViewer: false,
    isPublic: false
  };
  f.exports = n;
}), null);
__d('XUIError', ['cx', 'invariant', 'Promise', 'ARIA', 'Bootloader', 'CSS', 'DataStore', 'DOM', 'Event', 'Parent', 'filterObject', 'getActiveElement', 'getElementText', 'isNode', 'memoize', 'nl2br'], (function a(b, c, d, e, f, g, h, i) {
  'use strict';
  var j = 'data-xui-error-alignh',
    k = 'XUIError',
    l = 'data-xui-error',
    m = "_1tp7",
    n = 'data-xui-error-position';
  c('Event').listen(document.documentElement, 'mouseover', function(event) {
    if (c('Parent').byClass(c('getActiveElement')(), m)) return;
    var aa = c('Parent').byClass(event.getTarget(), m);
    if (aa) {
      w(aa);
    } else x();
  });
  c('Event').listen(document.documentElement, 'focusin', function(event) {
    var aa = c('Parent').byClass(event.getTarget(), m);
    if (aa) {
      w(aa);
    } else x();
  });
  c('Event').listen(document.documentElement, 'focusout', function(event) {
    x();
  });
  var o = c('memoize')(function() {
      return new(c('Promise'))(function(aa, ba) {
        c('Bootloader').loadModules(["React", "ReactDOM", "XUIErrorDialogImpl"], function(ca, da, ea) {
          aa(babelHelpers['extends']({
            React: ca,
            ReactDOM: da
          }, ea.getNewDialog()));
        }, 'XUIError');
      });
    }),
    p = null;

  function q(aa) {
    return babelHelpers['extends']({
      message: aa.getAttribute(l),
      position: aa.getAttribute(n),
      alignh: aa.getAttribute(j)
    }, c('DataStore').get(aa, k));
  }

  function r(aa, ba) {
    c('DataStore').set(aa, k, ba);
  }

  function s(aa, ba) {
    c('DataStore').set(aa, k, babelHelpers['extends']({}, c('DataStore').get(aa, k), ba));
  }

  function t(aa) {
    c('DataStore').remove(aa, k);
  }
  var u = false,
    v = false;

  function w(aa) {
    o().done(function(ba) {
      var ca = ba.React,
        da = ba.ReactDOM,
        ea = ba.dialog,
        fa = ba.dialogMessageNode,
        ga = q(aa),
        ha = ga.message;
      if (ha == null) return;
      var ia = ca.isValidElement(ha);
      if (u && !ia) da.unmountComponentAtNode(fa);
      if (ia) {
        da.render(ha, fa);
      } else {
        typeof ha === 'string' || c('isNode')(ha) || i(0);
        if (typeof ha === 'string') ha = c('nl2br')(ha);
        c('DOM').setContent(fa, ha);
      }
      u = ia;
      ea.setContext(aa).setPosition(ga.position || 'right').setAlignment(ga.alignh || (ga.position === 'above' || ga.position === 'below' ? 'right' : null)).show();
      c('ARIA').notify(c('getElementText')(fa));
      p = aa;
    });
    v = true;
  }

  function x() {
    if (!v) return;
    o().done(function(aa) {
      var ba = aa.React,
        ca = aa.ReactDOM,
        da = aa.dialog,
        ea = aa.dialogMessageNode;
      if (!p) return;
      if (u) {
        ca.unmountComponentAtNode(ea);
        u = false;
      }
      da.hide();
      p = null;
    });
  }

  function y(aa) {
    if (c('DOM').contains(aa, c('getActiveElement')())) w(aa);
  }
  var z = {
    set: function aa(ba) {
      var ca = ba.target,
        da = ba.message,
        ea = ba.position,
        fa = ba.alignh;
      da !== null || i(0);
      c('CSS').addClass(ca, m);
      s(ca, c('filterObject')({
        message: da,
        position: ea,
        alignh: fa
      }, function(ga) {
        return ga !== undefined;
      }));
      y(ca);
    },
    clear: function aa(ba) {
      c('CSS').removeClass(ba, m);
      ba.removeAttribute(l);
      t(ba);
      if (ba === p) x();
    },
    updatePosition: function aa() {
      if (!v) return;
      o().done(function(ba) {
        var ca = ba.dialog;
        if (p) ca.updatePosition();
      });
    },
    __setReactError: function aa(ba, ca) {
      var da = ca.message,
        ea = ca.position,
        fa = ca.alignh;
      da !== null || i(0);
      r(ba, {
        message: da,
        position: ea,
        alignh: fa
      });
      y(ba);
    },
    __clearReactError: function aa(ba) {
      t(ba);
      if (ba === p) x();
    }
  };
  f.exports = z;
}), null);
__d('XUIError.react', ['cx', 'React', 'ReactDOM', 'XUIError', 'joinClasses'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i, j, k = c('React').PropTypes,
    l = "_1tp7";
  i = babelHelpers.inherits(m, c('React').Component);
  j = i && i.prototype;
  m.prototype.componentDidMount = function() {
    if (this.props.xuiError != null) c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this), {
      message: this.props.xuiError,
      position: this.props.xuiErrorPosition,
      alignh: this.props.xuiErrorAlignh
    });
  };
  m.prototype.componentDidUpdate = function() {
    if (this.props.xuiError == null) {
      c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));
    } else c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this), {
      message: this.props.xuiError,
      position: this.props.xuiErrorPosition,
      alignh: this.props.xuiErrorAlignh
    });
  };
  m.prototype.componentWillUnmount = function() {
    c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));
  };
  m.prototype.render = function() {
    var n = c('React').Children.only(this.props.children);
    if (this.props.xuiError != null) n = c('React').cloneElement(n, {
      className: c('joinClasses')(n.props.className, l)
    });
    return n;
  };

  function m() {
    i.apply(this, arguments);
  }
  m.propTypes = {
    xuiError: k.any,
    xuiErrorPosition: k.oneOf(['above', 'below', 'left', 'right']),
    xuiErrorAlignh: k.oneOf(['left', 'center', 'right'])
  };
  f.exports = m;
}), null);
__d('UFIAttachMediaSection.react', ['cx', 'fbt', 'Bootloader', 'Focus', 'React', 'UFICommentFileInputAcceptValues', 'XUIError.react'], (function a(b, c, d, e, f, g, h, i) {
  'use strict';
  var j, k, l = c('React').PropTypes;
  j = babelHelpers.inherits(m, c('React').Component);
  k = j && j.prototype;

  function m() {
    var n, o;
    for (var p = arguments.length, q = Array(p), r = 0; r < p; r++) q[r] = arguments[r];
    return o = (n = k.constructor).call.apply(n, [this].concat(q)), this.state = {
      bootloaded: false,
      hasUploadFailure: false
    }, this.$UFIAttachMediaSection1 = null, this.$UFIAttachMediaSection2 = function() {
      this.setState({
        hasUploadFailure: false
      });
    }.bind(this), this.$UFIAttachMediaSection3 = function() {
      this.setState({
        hasUploadFailure: false
      });
    }.bind(this), this.$UFIAttachMediaSection4 = function() {
      this.setState({
        hasUploadFailure: true
      });
    }.bind(this), this.$UFIAttachMediaSection5 = function(event) {
      this.props.onClick && this.props.onClick();
      if (this.state.bootloaded) return;
      c('Bootloader').loadModules(["UFIUploader"], function(s) {
        this.$UFIAttachMediaSection1 = new s(this.refs.inputContainer, this.refs.inputControl, this.refs.input, this.props.getPhotoUploadData, this.props.prepareForAttachedPhotoPreview, this.props.prepareForAttachedVideoPreview, this.props.onPhotoUploadComplete, this.props.onVideoEncodeUpdate, this.props.onVideoUploadUpdate, this.props.onVideoUploadComplete, this.props.setFileInput, this.props.viewerActorID, this.$UFIAttachMediaSection2, this.$UFIAttachMediaSection3, this.$UFIAttachMediaSection4);
      }.bind(this), 'UFIAttachMediaSection.react');
      this.setState({
        bootloaded: true
      });
    }.bind(this), o;
  }
  m.prototype.componentDidMount = function() {
    var n = this.refs,
      o = n.input,
      p = n.inputControl;
    if (o && p) c('Focus').relocate(o, p);
  };
  m.prototype.componentWillUnmount = function() {
    this.$UFIAttachMediaSection1 && this.$UFIAttachMediaSection1.destroy();
  };
  m.prototype.render = function() {
    var n = this.props.allowVideoAttachments ? i._("Attach a Photo or Video") : i._("Attach a Photo"),
      o = i._("There was a problem attaching the file, please try again"),
      p = this.state.hasUploadFailure,
      q = c('React').createElement('div', {
        className: "_r1a" + (' ' + "UFIPhotoAttachLinkWrapper") + (' ' + "_m") + (!!this.props.attachment ? ' ' + "_5t1p" : ''),
        'data-hover': p ? null : 'tooltip',
        'data-tooltip-alignh': p ? null : 'center',
        'data-tooltip-content': p ? null : n,
        onClick: this.$UFIAttachMediaSection5,
        ref: 'inputContainer',
        role: 'presentation'
      }, c('React').createElement('span', {
        className: "UFICommentPhotoIcon",
        ref: 'inputControl'
      }, c('React').createElement('input', {
        accept: this.props.allowVideoAttachments ? c('UFICommentFileInputAcceptValues').both : c('UFICommentFileInputAcceptValues').photos,
        'aria-label': n,
        className: "_n",
        name: 'file',
        ref: 'input',
        title: n,
        type: 'file',
        key: '0'
      })));
    return (c('React').createElement(c('XUIError.react'), {
      xuiError: p ? o : null,
      xuiErrorPosition: 'above',
      xuiErrorAlignh: 'center'
    }, q));
  };
  m.propTypes = {
    getPhotoUploadData: l.func.isRequired,
    prepareForAttachedPhotoPreview: l.func.isRequired,
    prepareForAttachedVideoPreview: l.func,
    onPhotoUploadComplete: l.func.isRequired,
    onVideoUploadComplete: l.func,
    onVideoUploadUpdate: l.func,
    onVideoEncodeUpdate: l.func,
    onClick: l.func,
    setFileInput: l.func.isRequired,
    targetId: l.string,
    allowVideoAttachments: l.bool,
    attachment: l.object,
    viewerActorID: l.string.isRequired
  };
  f.exports = m;
}), null);
__d('concatMap', [], (function a(b, c, d, e, f, g) {
  function h(i, j) {
    var k = -1,
      l = j.length,
      m = [],
      n = void 0;
    while (++k < l) {
      n = i(j[k], k, j);
      if (Array.isArray(n)) {
        Array.prototype.push.apply(m, n);
      } else Array.prototype.push.call(m, n);
    }
    return m;
  }
  f.exports = h;
}), null);
__d('LitestandEllipsis', ['DOMQuery', 'concatMap', 'getElementText', 'isTextNode'], (function a(b, c, d, e, f, g) {
  var h, i = {
    add: function l(m, n, o) {
      o = o || m;
      c('DOMQuery').scry(m, 'br').forEach(function(v) {
        v.parentNode && v.parentNode.removeChild(v);
      });
      var p = o.offsetHeight || 0;
      if (p <= n) return;
      var q, r = '\u2026',
        s = k(m),
        t = s.length - 1,
        u = c('getElementText')(s[t]);
      if (t === 0) u = u.trimLeft();
      while (t >= 0 && p > n) {
        q = Math.max(u.lastIndexOf(' '), u.lastIndexOf('\n'));
        if (q === -1) q = u.length - r.length - 1;
        if (q <= 0) {
          j(s[t], '');
          t--;
          u = c('getElementText')(s[t]);
        } else {
          u = u.substr(0, q).trimRight() + r;
          j(s[t], u);
        }
        p = (o.offsetHeight || 0) - 1;
      }
    }
  };

  function j(l, m) {
    h = h || (l.textContent != null ? 'textContent' : 'innerText');
    l[h] = m;
  }

  function k(l) {
    if (c('isTextNode')(l)) return [l];
    return c('concatMap')(k, Array.from(l.childNodes));
  }
  f.exports = i;
}), null);
__d('LitestandShareAttachment', ['csx', 'cx', 'CSS', 'DOMQuery', 'LitestandEllipsis', 'queryThenMutateDOM'], (function a(b, c, d, e, f, g, h, i) {
  var j = 16,
    k = 22,
    l = 20,
    m = 5,
    n = 3,
    o = 2,
    p = 2,
    q = 5,
    r = 5,
    s = "_5qqr",
    t = "_6m2",
    u = {
      getSimpleCropClass: function y() {
        return s;
      },
      _truncateText: function y(z, aa) {
        var ba, ca, da, ea = v(z);
        c('queryThenMutateDOM')(function() {
          ba = c('DOMQuery').scry(z, "._6m6")[0];
          ca = c('DOMQuery').scry(z, "._6m7")[0];
          da = w(z, ba, ea);
        }, function() {
          if (!z.offsetHeight) {
            if (aa) c('CSS').addClass(z, s);
            return;
          }
          if (!da) {
            ca && c('CSS').hide(ca);
            ba && c('LitestandEllipsis').add(ba, ea * x(z));
          } else if (ca && da) {
            c('CSS').show(ca);
            c('LitestandEllipsis').add(ca, da * j);
          }
        });
      },
      init: function y(z) {
        if (c('CSS').hasClass(z, s)) {
          var aa = false;
          c('queryThenMutateDOM')(function() {
            if (z.offsetHeight) aa = true;
          }, function() {
            if (aa) {
              c('CSS').removeClass(z, s);
              this._truncateText(z, true);
            }
          }.bind(this));
          return;
        } else {
          var ba = c('CSS').hasClass(z, t);
          this._truncateText(z, ba);
        }
      },
      getNumDescriptionLines: function y(z) {
        return w(z, c('DOMQuery').scry(z, "._6m6")[0], v(z));
      },
      getDescriptionLineHeight: function y() {
        return j;
      }
    };

  function v(y) {
    var z = c('CSS').matchesSelector(y, "._59ap"),
      aa = c('CSS').matchesSelector(y, "._pb2"),
      ba = c('DOMQuery').scry(y, "^div._4rtc").length > 0,
      ca;
    if (aa) {
      ca = p;
    } else if (ba) {
      ca = o;
    } else if (z) {
      ca = n;
    } else ca = m;
    return ca;
  }

  function w(y, z, aa) {
    var ba = c('DOMQuery').scry(y, "._6m3")[0];
    if (!z || !ba) return 0;
    var ca = c('DOMQuery').scry(y, "._59tj")[0],
      da = c('CSS').matchesSelector(y, "._59ap"),
      ea = c('CSS').matchesSelector(y, "._pb2"),
      fa = Math.round(z.scrollHeight / x(y));
    if (fa > aa && !ea) return 0;
    var ga = ba.offsetHeight - q - z.offsetHeight - (ca ? ca.offsetHeight : 0) - (da ? 0 : r) + 1;
    return Math.floor(Math.max(ga, 0) / j);
  }

  function x(y) {
    var z = c('CSS').matchesSelector(y, "._pb2");
    return z ? l : k;
  }
  f.exports = u;
}), null);
__d("XVideoInLiveCommentPreviewController", ["XController"], (function a(b, c, d, e, f, g) {
  f.exports = c("XController").create("\/video\/in_live_comment\/", {});
}), null);
__d('UFICommentAttachment.react', ['cx', 'AsyncRequest', 'BootloadedComponent.react', 'CSS', 'DOM', 'DOMQuery', 'HTML', 'Image.react', 'JSResource', 'Link.react', 'LitestandShareAttachment', 'React', 'ReactDOM', 'SubscriptionsHandler', 'UFILocallyComposedCommentStore', 'XUISpinner.react', 'XVideoInLiveCommentPreviewController'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i, j, k = c('React').PropTypes,
    l = 'ufi_comment_photo',
    m = 80,
    n = 'ufi_comment_sticker';
  i = babelHelpers.inherits(o, c('React').Component);
  j = i && i.prototype;

  function o(p) {
    j.constructor.call(this, p);
    this.$UFICommentAttachment1 = function(q) {
      return (q.photo_comment || q.video_comment || q.gif_comment || q.attachment);
    };
    this.renderGif = function(q) {
      return (c('React').createElement('div', null, 'GIF FBID: ', q.fbid));
    };
    this.renderPhoto = function(q) {
      var r = "_2rn3 _4-eo";
      return (c('React').createElement('div', {
        className: "_4iv9"
      }, c('React').createElement(c('Link.react'), {
        className: r,
        'data-testid': l,
        href: q.metadata.url
      }, c('React').createElement('div', {
        style: {
          height: q.metadata.height
        }
      }, c('React').createElement(c('Image.react'), {
        src: q.metadata.preview_uri
      })))));
    };
    this.renderShare = function(q) {
      return (c('React').createElement(c('BootloadedComponent.react'), {
        bootloadPlaceholder: c('React').createElement('span', null),
        bootloadLoader: c('JSResource')('UFILiveCommentLinkPreview.react').__setRef('UFICommentAttachment.react'),
        attachment: q
      }));
    };
    this.renderLivePlaceInfo = function(q) {
      return (c('React').createElement(c('BootloadedComponent.react'), {
        bootloadPlaceholder: c('React').createElement('span', null),
        bootloadLoader: c('JSResource')('PlaceListLiveCommentAttachment.react').__setRef('UFICommentAttachment.react'),
        commentID: this.props.comment.fbid,
        data: q,
        postID: this.props.comment.ftentidentifier
      }));
    }.bind(this);
    this.state = {
      localCommentIDs: c('UFILocallyComposedCommentStore').getStateForInstance(this.props.comment.ufiinstanceid)
    };
  }
  o.prototype.$UFICommentAttachment2 = function(p, q) {
    var r, s, t;
    if (q > p) {
      t = m / q;
      r = p * t;
      s = q * t;
    } else {
      t = m / p;
      r = p * t;
      s = q * t;
    }
    return {
      height: Math.round(r),
      width: Math.round(s)
    };
  };
  o.prototype.componentDidMount = function() {
    var p = this.$UFICommentAttachment1(this.props.comment);
    if (p) this.renderAttachment(p);
    this.$UFICommentAttachment3 = new(c('SubscriptionsHandler'))();
    this.$UFICommentAttachment3.addSubscriptions(c('UFILocallyComposedCommentStore').addListener(function() {
      this.setState({
        localCommentIDs: c('UFILocallyComposedCommentStore').getStateForInstance(this.props.comment.ufiinstanceid)
      });
    }.bind(this)));
  };
  o.prototype.shouldComponentUpdate = function(p, q) {
    var r = this.$UFICommentAttachment1(this.props.comment),
      s = this.$UFICommentAttachment1(p.comment);
    if (!r && !s) return false;
    if (!r || !s || r.markup != s.markup) {
      return true;
    } else return false;
  };
  o.prototype.componentDidUpdate = function(p) {
    var q = this.$UFICommentAttachment1(this.props.comment);
    if (!q) return;
    if (q.type !== 'sticker' && q.type !== 'photo') this.renderAttachment(q);
  };
  o.prototype.componentWillUnmount = function() {
    this.$UFICommentAttachment3 && this.$UFICommentAttachment3.release();
  };
  o.prototype.renderAttachment = function(p) {
    if (p && this.refs && this.refs.contents && p.markup) {
      var q = p.markup;
      if (c('HTML').isHTML(q.markup)) q = c('HTML').replaceJSONWrapper(q.markup).getRootNode();
      var r = q.parentNode,
        s = c('ReactDOM').findDOMNode(this.refs.contents);
      if (r && r !== s) q = q.cloneNode(true);
      if (this.props.disableTheater) {
        var t = q.querySelector('a[rel="theater"]');
        if (t) c('DOM').setAttributes(t, {
          target: '_blank',
          rel: ''
        });
      }
      c('DOM').setContent(s, q);
      if (p.type == 'share') {
        var u = "_6m2",
          v = c('CSS').hasClass(s, u) ? s : c('DOMQuery').scry(s, '.' + u)[0];
        c('LitestandShareAttachment').init(v ? v : s);
      }
    } else if (p && p.type == 'video' && !p.markup) {
      var w = c('XVideoInLiveCommentPreviewController').getURIBuilder();
      new(c('AsyncRequest'))(w.getURI()).setMethod('POST').setData({
        video_id: p.target.id
      }).setHandler(function(x) {
        this.renderAttachment(x.payload.video_preview.video_comment);
      }.bind(this)).send();
    }
  };
  o.prototype.renderSticker = function(p) {
    var q = this.$UFICommentAttachment2(p.metadata.height, p.metadata.width),
      r = null,
      s = null;
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
      r = p.metadata.sprite_uri_2x;
      s = p.metadata.source_uri_2x;
    } else {
      r = p.metadata.sprite_uri;
      s = p.metadata.source_uri;
    }
    return c('React').createElement(c('BootloadedComponent.react'), {
      bootloadPlaceholder: c('React').createElement(c('XUISpinner.react'), null),
      bootloadLoader: c('JSResource')('Sticker.react').__setRef('UFICommentAttachment.react'),
      animationTrigger: 'load_and_hover',
      frameCount: p.metadata.frameCount,
      frameRate: p.metadata.frameRate,
      framesPerCol: p.metadata.framesPerCol,
      framesPerRow: p.metadata.framesPerRow,
      spriteURI: r,
      sourceHeight: q.height,
      sourceURI: s,
      sourceWidth: q.width,
      testID: n
    });
  };
  o.prototype.renderPlaceInfo = function(p) {
    var q = this.props.comment.islocal || this.state.localCommentIDs[this.props.comment.id];
    return (c('React').createElement(c('BootloadedComponent.react'), babelHelpers['extends']({
      bootloadPlaceholder: c('React').createElement(c('XUISpinner.react'), null),
      bootloadLoader: c('JSResource')('MultiPlacePageInfoCard.react').__setRef('UFICommentAttachment.react'),
      isLocallyComposed: q
    }, p.props)));
  };
  o.prototype.render = function() {
    var p = this.$UFICommentAttachment1(this.props.comment);
    if (p)
      if (p && p.type === 'sticker') {
        return this.renderSticker(p);
      } else if (p && p.type === 'gif') {
      return this.renderGif(p);
    } else if (p && p.type === 'photo') {
      return this.renderPhoto(p);
    } else if (p && p.type === 'live_share') {
      return this.renderShare(p);
    } else if (p && p.type == 'comment_place_info') {
      return this.renderPlaceInfo(p);
    } else if (p && p.type == 'live_comment_place_info') {
      return this.renderLivePlaceInfo(p);
    } else return c('React').createElement('div', {
      ref: 'contents'
    });
    return c('React').createElement('span', null);
  };
  o.propTypes = {
    comment: k.object.isRequired,
    disableTheater: k.bool
  };
  f.exports = o;
}), null);
__d('FBCollapsibleList.react', ['Link.react', 'React', 'getObjectValues'], (function a(b, c, d, e, f, g) {
  var h, i, j = c('React').PropTypes,
    k = {
      COMMA: 'comma',
      NEWLINE: 'newline'
    };
  h = babelHelpers.inherits(l, c('React').Component);
  i = h && h.prototype;

  function l() {
    var m, n;
    'use strict';
    for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
    return n = (m = i.constructor).call.apply(m, [this].concat(p)), this.state = {
      numShown: this.props.numVisible
    }, this.$FBCollapsibleList1 = function() {
      return this.state.numShown < this.$FBCollapsibleList6();
    }.bind(this), this.$FBCollapsibleList2 = function() {
      var r = this.$FBCollapsibleList6();
      return this.props.showLessLink && this.props.numVisible < r && this.state.numShown >= r;
    }.bind(this), this.$FBCollapsibleList4 = function() {
      var r = this.$FBCollapsibleList6() - this.props.numVisible;
      return (c('React').createElement(c('Link.react'), {
        onClick: this.$FBCollapsibleList7,
        key: 'seeMore'
      }, c('React').createElement('b', null, 'Show more ', '(', r, ')')));
    }.bind(this), this.$FBCollapsibleList5 = function() {
      return (c('React').createElement(c('Link.react'), {
        onClick: this.$FBCollapsibleList8,
        key: 'seeLess'
      }, c('React').createElement('b', null, 'Show less')));
    }.bind(this), this.$FBCollapsibleList3 = function(r, s) {
      switch (this.props.delimiter) {
        case k.NEWLINE:
          return [c('React').createElement('div', null, r)];
        case k.COMMA:
          return s ? [r] : [r, ', '];
        default:
          throw new Error('Invalid delimiter: ' + this.props.delimiter);
      }
    }.bind(this), this.$FBCollapsibleList8 = function() {
      this.setState({
        numShown: this.props.numVisible
      });
    }.bind(this), this.$FBCollapsibleList6 = function() {
      if (!!this.props.maxShowMore && this.props.maxShowMore < this.props.children.length) return this.props.maxShowMore;
      return this.props.children.length;
    }.bind(this), this.$FBCollapsibleList7 = function() {
      this.setState({
        numShown: this.$FBCollapsibleList6()
      });
    }.bind(this), n;
  }
  l.prototype.render = function() {
    'use strict';
    var m = this.$FBCollapsibleList1(),
      n = this.$FBCollapsibleList2(),
      o = Math.min(this.state.numShown, this.props.children.length),
      p = m || n,
      q = [];
    for (var r = 0; r < o; r++) {
      var s = !p && r === o - 1;
      q.push(this.$FBCollapsibleList3(this.props.children[r], s));
    }
    if (m) {
      q.push(this.$FBCollapsibleList4());
    } else if (n) q.push(this.$FBCollapsibleList5());
    return this.props.display == 'block' ? c('React').createElement('div', this.props, q) : c('React').createElement('span', this.props, q);
  };
  l.propTypes = {
    delimiter: j.oneOf(c('getObjectValues')(k)),
    display: j.oneOf(['inline', 'block']),
    numVisible: j.number.isRequired,
    maxShowMore: j.number,
    showLessLink: j.bool
  };
  l.Delimiters = k;
  l.defaultProps = {
    children: [],
    delimiter: k.NEWLINE,
    display: 'block',
    showLessLink: false
  };
  f.exports = l;
}), null);
__d('Middot.react', ['React'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h, i;
  h = babelHelpers.inherits(j, c('React').Component);
  i = h && h.prototype;
  j.prototype.render = function() {
    return (c('React').createElement('span', babelHelpers['extends']({}, this.props, {
      role: 'presentation',
      'aria-hidden': true
    }), ' \u00B7 '));
  };

  function j() {
    h.apply(this, arguments);
  }
  f.exports = j;
}), null);
__d('Timestamp.react', ['LiveTimer', 'React', 'ReactDOM', 'joinClasses'], (function a(b, c, d, e, f, g) {
  var h, i, j = c('React').PropTypes;
  h = babelHelpers.inherits(k, c('React').Component);
  i = h && h.prototype;
  k.prototype.componentDidMount = function() {
    'use strict';
    if (this.props.autoUpdate) c('LiveTimer').addTimeStamps(c('ReactDOM').findDOMNode(this));
  };
  k.prototype.componentDidUpdate = function(l, m) {
    'use strict';
    if (this.props.autoUpdate && this.props.time !== l.time) c('LiveTimer').loop();
  };
  k.prototype.componentWillUnmount = function() {
    'use strict';
    c('LiveTimer').removeTimestamp(c('ReactDOM').findDOMNode(this));
  };
  k.prototype.render = function() {
    'use strict';
    var l = c('LiveTimer').renderRelativeTimeToServer(this.props.time, this.props.shorten, this.props.minimize);
    return (c('React').createElement('abbr', babelHelpers['extends']({}, this.props, {
      className: c('joinClasses')(this.props.className, "livetimestamp"),
      title: this.props.verbose,
      'data-utime': this.props.time,
      'data-minimize': this.props.minimize ? true : null,
      'data-shorten': this.props.shorten ? true : null
    }), l.text.toString() || this.props.text));
  };

  function k() {
    'use strict';
    h.apply(this, arguments);
  }
  k.propTypes = {
    autoUpdate: j.bool
  };
  k.defaultProps = {
    autoUpdate: false
  };
  f.exports = k;
}), null);
__d('TrackingNodes', ['DataAttributeUtils', 'TrackingNodeTypes'], (function a(b, c, d, e, f, g) {
  var h = {
    types: c('TrackingNodeTypes'),
    BASE_CODE_START: 58,
    BASE_CODE_END: 126,
    BASE_CODE_SIZE: 69,
    PREFIX_CODE_START: 42,
    PREFIX_CODE_END: 47,
    PREFIX_CODE_SIZE: 6,
    TN_URL_PARAM: '__tn__',
    encodeTN: function i(j, k) {
      var l = (j - 1) % h.BASE_CODE_SIZE,
        m = parseInt((j - 1) / h.BASE_CODE_SIZE, 10);
      if (j < 1 || m > h.PREFIX_CODE_SIZE) throw Error('Invalid tracking node: ' + j);
      var n = "";
      if (m > 0) n += String.fromCharCode(m - 1 + h.PREFIX_CODE_START);
      n += String.fromCharCode(l + h.BASE_CODE_START);
      if (typeof k != "undefined" && k > 0) n += String.fromCharCode(48 + Math.min(k, 10) - 1);
      return n;
    },
    decodeTN: function i(j) {
      if (j.length === 0) return [0];
      var k = j.charCodeAt(0),
        l = 1,
        m, n;
      if (k >= h.PREFIX_CODE_START && k <= h.PREFIX_CODE_END) {
        if (j.length == 1) return [0];
        n = k - h.PREFIX_CODE_START + 1;
        m = j.charCodeAt(1);
        l = 2;
      } else {
        n = 0;
        m = k;
      }
      if (m < h.BASE_CODE_START || m > h.BASE_CODE_END) return [0];
      var o = n * h.BASE_CODE_SIZE + (m - h.BASE_CODE_START) + 1;
      if (j.length > l && j.charAt(l) >= '0' && j.charAt(l) <= '9') return [l + 1, [o, parseInt(j.charAt(l), 10) + 1]];
      return [l, [o]];
    },
    parseTrackingNodeString: function i(j) {
      var k = [];
      while (j.length > 0) {
        var l = h.decodeTN(j);
        if (l.length == 1) return [];
        k.push(l[1]);
        j = j.substring(l[0]);
      }
      return k;
    },
    getTrackingInfo: function i(j, k) {
      return '{"tn":"' + h.encodeTN(j, k) + '"}';
    },
    addDataAttribute: function i(j, k, l) {
      if (k === undefined) return;
      ['data-ft', 'data-gt'].forEach(function(m) {
        var n;
        if (j.getAttribute) {
          n = c('DataAttributeUtils').getDataAttribute(j, m) || "{}";
        } else if (j.props) {
          n = j.props[m] || "{}";
        } else return;
        var o = h.encodeTN(k, l);
        try {
          n = JSON.parse(n);
          if (n.tn && n.tn === o) return;
          n.tn = o;
          if (j.setAttribute) {
            j.setAttribute(m, JSON.stringify(n));
          } else if (j.props) {
            j.props[m] = JSON.stringify(n);
          } else return;
        } catch (p) {}
      });
    }
  };
  f.exports = h;
}), null);
__d('UFICommentMetadata.react', ['cx', 'fbt', 'Bootloader', 'BootloadedComponent.react', 'FBCollapsibleList.react', 'JSResource', 'React', 'ReactDOM', 'Timestamp.react', 'TrackingNodes', 'UFIConstants', 'Middot.react', 'URI', 'XUISpinner.react'], (function a(b, c, d, e, f, g, h, i) {
  'use strict';
  var j, k, l = c('React').PropTypes,
    m = c('UFIConstants').UFIStatus,
    n = 'ufi_comment_timestamp',
    o = "UFIFailureMessageIcon",
    p = "UFIFailureMessage",
    q = "uiLinkSubtle",
    r = function t(u) {
      var v = u.status;
      return v === m.FAILED_ADD || v === m.FAILED_EDIT;
    };
  j = babelHelpers.inherits(s, c('React').Component);
  k = j && j.prototype;
  s.prototype.render = function() {
    var t = this.props,
      u = t.comment,
      v = t.onRetrySubmit,
      w = void 0,
      x = void 0;
    if (r(u)) {
      w = [c('React').createElement('span', {
        key: 'failure',
        className: p
      }, c('React').createElement('i', {
        className: o
      }), i._("Unable to post comment.")), u.allowRetry && v ? [' ', c('React').createElement('a', {
        key: 'rety-submit',
        onClick: v,
        href: '#',
        role: 'button'
      }, i._("Try Again"))] : null];
    } else {
      var y = c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.SOURCE);
      x = c('React').createElement(c('Timestamp.react'), {
        shorten: this.props.shortenTimestamp,
        time: u.timestamp.time,
        text: u.timestamp.text,
        verbose: u.timestamp.verbose
      });
      if (this.props.showPermalink) x = c('React').createElement('a', {
        key: 'timestamp-message',
        className: q,
        href: this.props.permalink,
        'data-ft': y,
        'data-testid': n,
        target: this.props.permalinkTarget
      }, x);
    }
    var z = null;
    if (u.originalTimestamp) {
      var aa = new(c('URI'))('/ajax/edits/browser/comment').addQueryData({
        comment_token: u.id
      }).toString();
      z = [c('React').createElement(c('Middot.react'), {
        key: 'middot-editNote'
      }), c('React').createElement('a', {
        ajaxify: aa,
        className: 'uiLinkSubtle',
        'data-hover': 'tooltip',
        'data-tooltip-content': i._("Show edit history"),
        href: '#',
        key: 'edit-link',
        ref: 'EditLink',
        rel: 'dialog',
        role: 'button',
        title: i._("Show edit history")
      }, i._("Edited"))];
    }
    var ba = null;
    if (u.creator_data) ba = [c('React').createElement(c('BootloadedComponent.react'), {
      key: 'creator',
      bootloadPlaceholder: c('React').createElement(c('XUISpinner.react'), {
        size: 'small'
      }),
      bootloadLoader: c('JSResource')('UFICreatorInfo.react').__setRef('UFICommentMetadata.react'),
      creatorID: u.creator_data.creatorID,
      creatorType: u.creator_data.creatorType,
      creatorName: u.creator_data.creatorName,
      labelType: u.creator_data.labelType,
      pageID: u.creator_data.pageID,
      profileURI: u.creator_data.profileURI
    }), c('React').createElement(c('Middot.react'), {
      key: 'middot-creator'
    })];
    var ca = null;
    if (u.body && u.body.markdown_enabled && u.body.markup) ca = [c('React').createElement(c('Middot.react'), {
      key: 'middot-markdownNote'
    }), c('React').createElement(c('BootloadedComponent.react'), {
      bootloadPlaceholder: c('React').createElement('a', {
        className: 'uiLinkSubtle'
      }, i._("Formatted")),
      bootloadLoader: c('JSResource')('UFICommentMarkdownFormattedLink.react').__setRef('UFICommentMetadata.react'),
      comment: u,
      key: 'markdown-link'
    })];
    var da = u.reportedBy,
      ea = null;
    if (da && da.length > 0) ea = [c('React').createElement(c('Middot.react'), {
      key: 'middot-reportedByMessage'
    }), c('React').createElement('span', {
      key: 'reportedByMessage'
    }, i._("Reported by {Comma-separated list of names}", [i.param('Comma-separated list of names', c('React').createElement(c('FBCollapsibleList.react'), {
      numVisible: 2,
      showLessLink: true,
      display: 'inline',
      delimiter: 'comma'
    }, da))]))];
    return (c('React').createElement('span', null, ba, x, w, z, ca, ea));
  };
  s.prototype.componentWillUpdate = function(t) {
    var u = this.props.comment,
      v = t.comment;
    if (!u.editnux && !!v.editnux) c('Bootloader').loadModules(["LegacyContextualDialog"], function(w) {
      var x = new w();
      x.init(v.editnux).setContext(c('ReactDOM').findDOMNode(this.refs.EditLink)).setWidth(300).setPosition('below').show();
    }.bind(this), 'UFICommentMetadata.react');
  };

  function s() {
    j.apply(this, arguments);
  }
  s.propTypes = {
    comment: l.object.isRequired,
    contextArgs: l.object,
    onRetrySubmit: l.func,
    permalink: l.string,
    shortenTimestamp: l.bool,
    showPermalink: l.bool,
    permalinkTarget: l.string
  };
  f.exports = s;
}), null);
__d('ImageBlock.react', ['cx', 'invariant', 'LeftRight.react', 'React', 'joinClasses'], (function a(b, c, d, e, f, g, h, i) {
  var j, k;

  function l(o) {
    var p = o.children;
    p && (p.length === 2 || p.length === 3) || i(0);
    p[0] !== null || i(0);
    return p;
  }

  function m(o) {
    return "img" + (' ' + "_8o") + (o === 'small' ? ' ' + "_8r" : '') + (o === 'medium' ? ' ' + "_8s" : '') + (o === 'large' ? ' ' + "_8t" : '');
  }
  j = babelHelpers.inherits(n, c('React').Component);
  k = j && j.prototype;
  n.prototype.render = function() {
    'use strict';
    var o = l(this.props),
      p = o[0],
      q = o[1],
      r = o[2],
      s = this.props,
      t = s.imageClassName,
      u = s.contentClassName,
      v = s.spacing,
      w = babelHelpers.objectWithoutProperties(s, ['imageClassName', 'contentClassName', 'spacing']),
      x = p.props,
      y = x.className,
      z = x.alt,
      aa = x.tabIndex,
      ba = x.title,
      ca = {
        className: c('joinClasses')(y, m(v), t)
      };
    if (p.type === 'img') {
      if (z === undefined) ca.alt = '';
    } else if ((p.type === 'a' || p.type === 'link') && aa === undefined && ba === undefined && p.props['aria-label'] === undefined) {
      ca.tabIndex = '-1';
      ca['aria-hidden'] = 'true';
    }
    p = c('React').cloneElement(p, ca);
    var da = c('joinClasses')(u, "_42ef" + (v === 'small' ? ' ' + "_8u" : '')),
      ea = void 0;
    if (!r) {
      ea = c('React').createElement('div', {
        className: da
      }, q);
    } else ea = c('React').createElement(c('LeftRight.react'), {
      className: da,
      direction: c('LeftRight.react').DIRECTION.right
    }, q, r);
    return (c('React').createElement(c('LeftRight.react'), babelHelpers['extends']({}, w, {
      direction: c('LeftRight.react').DIRECTION.left
    }), p, ea));
  };

  function n() {
    'use strict';
    j.apply(this, arguments);
  }
  n.defaultProps = {
    spacing: 'small'
  };
  f.exports = n;
}), null);
__d('UFIImageBlock.react', ['cx', 'ImageBlock.react', 'React'], (function a(b, c, d, e, f, g, h) {
  'use strict';
  var i, j;
  i = babelHelpers.inherits(k, c('React').Component);
  j = i && i.prototype;
  k.prototype.render = function() {
    return (c('React').createElement(c('ImageBlock.react'), babelHelpers['extends']({}, this.props, {
      imageClassName: "UFIImageBlockImage",
      contentClassName: "UFIImageBlockContent"
    }), this.props.children));
  };

  function k() {
    i.apply(this, arguments);
  }
  f.exports = k;
}), null);
__d('UFIStickerButton.react', ['cx', 'fbt', 'Arbiter', 'Bootloader', 'Focus', 'Link.react', 'React', 'StickerInterfaces', 'getObjectValues'], (function a(b, c, d, e, f, g, h, i) {
  'use strict';
  var j = c('React').PropTypes,
    k = c('React').createClass({
      displayName: 'UFIStickerButton',
      _clickGuard: false,
      _updateListener: null,
      _linkRef: null,
      propTypes: {
        onStickerFlyoutShow: j.func,
        onStickerSelected: j.func.isRequired,
        onEmoticonSelected: j.func,
        showTooltip: j.bool,
        stickerInterface: j.oneOf(c('getObjectValues')(c('StickerInterfaces'))),
        tabIndex: j.number
      },
      getDefaultProps: function l() {
        return {
          showTooltip: true,
          stickerInterface: c('StickerInterfaces').COMMENTS
        };
      },
      getInitialState: function l() {
        return {
          renderFlyout: null,
          flyoutShown: false
        };
      },
      componentDidMount: function l() {
        this._updateListener = c('Arbiter').subscribe('page_transition', function() {
          return this._hideFlyout();
        }.bind(this));
        if (this._linkRef && this.refs.icon) c('Focus').relocate(this._linkRef, this.refs.icon);
      },
      componentWillUnmount: function l() {
        this._updateListener && this._updateListener.unsubscribe();
      },
      render: function l() {
        var m = i._("Post a sticker");
        return (c('React').createElement(c('Link.react'), {
          'aria-label': m,
          className: "_r1a UFICommentStickerButton",
          'data-hover': 'tooltip',
          'data-tooltip-alignh': 'center',
          'data-tooltip-content': this.props.showTooltip ? m : null,
          linkRef: this._setRef,
          onClick: this._onLinkClicked,
          onMouseDown: this._prepareForClick,
          role: 'button',
          tabIndex: this.props.tabIndex
        }, c('React').createElement('div', {
          ref: 'icon',
          className: "UFICommentStickerIcon" + (this.state.flyoutShown ? ' ' + "UFICommentStickerIconActive" : '')
        }), this.props.children, this.state.renderFlyout ? this.state.renderFlyout() : null));
      },
      _hideFlyout: function l() {
        this.setState({
          flyoutShown: false
        });
      },
      _prepareForClick: function l() {
        this._clickGuard = this.state.flyoutShown;
      },
      _onLinkClicked: function l(m) {
        m.preventDefault();
        if (this.state.renderFlyout !== null) {
          if (!this._clickGuard) {
            this.props.onStickerFlyoutShow && this.props.onStickerFlyoutShow();
            this.setState({
              flyoutShown: true
            });
          }
          return;
        }
        c('Bootloader').loadModules(["ContextualLayerAutoFlip", "LayerTabIsolation", "StickersFlyout.react", "XUIContextualDialog.react"], function(n, o, p, q) {
          this.setState({
            flyoutShown: true,
            renderFlyout: function() {
              return (c('React').createElement(q, {
                alignment: 'right',
                behaviors: {
                  ContextualLayerAutoFlip: n,
                  LayerTabIsolation: o
                },
                className: "_5e-r",
                contextRef: function() {
                  return this._linkRef;
                }.bind(this),
                onBlur: this._hideFlyout,
                onToggle: function(r) {
                  if (!r && this.state.flyoutShown) this._hideFlyout();
                }.bind(this),
                position: 'above',
                shown: this.state.flyoutShown,
                hasActionableContext: true,
                width: 278
              }, c('React').createElement('div', null, c('React').createElement(p, {
                onEscKeyDown: this._hideFlyout,
                onStickerSelect: this._onStickerSelected,
                onEmoticonSelect: this._onEmoticonSelected,
                stickerInterface: this.props.stickerInterface,
                shown: this.state.flyoutShown
              }))));
            }.bind(this)
          });
          this.props.onStickerFlyoutShow && this.props.onStickerFlyoutShow();
        }.bind(this), 'UFIStickerButton.react');
      },
      _onStickerSelected: function l(m, event) {
        this.props.onStickerSelected(m, event);
        this._hideFlyout();
      },
      _onEmoticonSelected: function l(m) {
        this.props.onEmoticonSelected && this.props.onEmoticonSelected(m);
        this._hideFlyout();
      },
      _setRef: function l(m) {
        this._linkRef = m;
      }
    });
  f.exports = k;
}), null);
__d('XUIGrayText.react', ['cx', 'React', 'XUIText.react', 'joinClasses'], (function a(b, c, d, e, f, g, h) {
  var i, j, k = c('React').PropTypes;
  i = babelHelpers.inherits(l, c('React').Component);
  j = i && i.prototype;
  l.prototype.render = function() {
    'use strict';
    var m = this.props,
      n = m.shade,
      o = babelHelpers.objectWithoutProperties(m, ['shade']),
      p = (n === 'light' ? "_50f8" : '') + (n === 'medium' ? ' ' + "_c24" : '') + (n === 'dark' ? ' ' + "_50f9" : '');
    return (c('React').createElement(c('XUIText.react'), babelHelpers['extends']({}, o, {
      className: c('joinClasses')(this.props.className, p)
    }), this.props.children));
  };

  function l() {
    'use strict';
    i.apply(this, arguments);
  }
  l.propTypes = {
    shade: k.oneOf(['light', 'medium', 'dark'])
  };
  l.defaultProps = {
    shade: 'light'
  };
  f.exports = l;
}), null);
__d('LitestandStoryInsertionStatus', ['ArbiterMixin'], (function a(b, c, d, e, f, g) {
  var h = 'check',
    i = {
      registerBlocker: function j(k) {
        return i.subscribe(h, function(l, m) {
          if (m.can_insert && k()) m.can_insert = false;
        });
      },
      canInsert: function j() {
        var k = {
          can_insert: true
        };
        i.inform(h, k);
        return k.can_insert;
      }
    };
  Object.assign(i, c('ArbiterMixin'));
  f.exports = i;
}), null);
__d('LitestandClassicRHC', ['cx', 'Arbiter', 'BigPipe', 'CSS', 'DOMQuery', 'NavigationMessage', 'Run', 'SubscriptionsHandler', 'requireWeak'], (function a(b, c, d, e, f, g, h) {
  var i = "_268y";

  function j(l, m) {
    var n = new(c('SubscriptionsHandler'))(),
      o = n.release.bind(n),
      p = c('DOMQuery').scry(l, '.pagelet'),
      q = p.length;
    n.addSubscriptions(m.subscribe([].map.call(p, function(r) {
      return r.id + '_displayed';
    }), function() {
      c('CSS').removeClass(l, i);
      if (--q === 0) {
        c('Arbiter').inform('LitestandClassicRHC/loaded');
        o();
      }
    }), c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN, o), m.subscribeOnce(c('BigPipe').Events.displayed, function() {
      c('Arbiter').inform('LitestandClassicRHC/loaded');
      c('CSS').removeClass(l, i);
      o();
    }));
    c('Run').onLeave(o);
  }
  var k = {
    init: function l(m) {
      c('requireWeak')('BigPipe', function(n) {
        var o = n.getCurrentInstance();
        if (o && o.arbiter) {
          j(m, o.arbiter);
        } else c('Arbiter').subscribeOnce('BigPipe/init', function(event, p) {
          j(m, p.arbiter);
        }, c('Arbiter').SUBSCRIBE_NEW);
      });
    }
  };
  f.exports = k;
}), null);
__d('ReactComposerEvents', [], (function a(b, c, d, e, f, g) {
  var h = {
    CHANGE: 'change',
    INSTANCE_MOUNTED: 'composer/instanceMounted/',
    ACTIVATE_ATTACHMENT: 'composer/activateAttachment/',
    MENTION_INPUT_FOCUS: 'composer/mentionInputFocused/',
    TEXT_PREFILL_BEFORE_BOOTLOAD: 'composer/textPrefillBeforeBootload/',
    RERENDER_MENTION_INPUT: 'reactComposer/rerenderMentionInput/',
    OPTIMISTIC_POSTING_STARTED: 'composer/optimisticPostingStarted/',
    POST_STARTED: 'composer/postStarted/',
    POST_SUCCEEDED: 'composer/postSucceeded/',
    COMPOSER_RESET: 'composer/reset/',
    COMPOSER_UNMOUNT: 'composer/unmount/',
    SET_PREFILL_DATA: 'reactComposer/setPrefillData/'
  };
  f.exports = h;
}), null);
__d('ReactComposerIDGenerator', ['ReactComposerConstants', 'uniqueID'], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = {
    getID: function i() {
      return c('ReactComposerConstants').ID_PREFIX + c('uniqueID')();
    },
    isComposerID: function i(j) {
      return !!j && j.startsWith(c('ReactComposerConstants').ID_PREFIX);
    }
  };
  f.exports = h;
}), null);
__d('FbFeedHighlight', ['cx', 'JSXDOM', 'CSS', 'DOM', 'DOMScroll'], (function a(b, c, d, e, f, g, h) {
  var i = 1000,
    j = 1000,
    k = null;

  function l() {
    return (c('JSXDOM').div({
      className: "_1usz"
    }, c('JSXDOM').div({
      className: "_1us-"
    }), c('JSXDOM').div({
      className: "_1us_"
    }), c('JSXDOM').div({
      className: "_1ut0"
    }), c('JSXDOM').div({
      className: "_1ut1"
    })));
  }
  var m = {
    highlightAndScrollTo: function n(o) {
      m.highlightAndScrollToWithTime(o, j, 0);
    },
    highlightAndScrollToWithTime: function n(o, p, q) {
      m.highlightWithTime(o, p);
      m.scrollTo(o, q);
    },
    highlightSingle: function n(o) {
      m.highlightSingleWithTime(o, j);
    },
    highlightSingleWithTime: function n(o, p) {
      var q = l();
      c('DOM').appendContent(o, q);
      setTimeout(function() {
        if (k) c('DOM').remove(k);
        k = q;
        c('CSS').addClass(o, "_1ut2");
      }, 0);
      setTimeout(function() {
        c('CSS').removeClass(o, "_1ut2");
        setTimeout(function() {
          c('DOM').remove(q);
          if (q == k) k = null;
        }, i + p);
      }, i + p);
    },
    highlight: function n(o) {
      m.highlightWithTime(o, j);
    },
    highlightWithTime: function n(o, p) {
      var q = m.highlightPermanent(o);
      setTimeout(function() {
        c('CSS').removeClass(o, "_1ut2");
        setTimeout(c('DOM').remove.bind(null, q), i + i);
      }, i + p);
    },
    highlightPermanent: function n(o) {
      var p = l();
      c('DOM').appendContent(o, p);
      setTimeout(c('CSS').addClass.bind(null, o, "_1ut2"), 0);
      return p;
    },
    scrollTo: function n(o, p) {
      var q = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
      setTimeout(c('DOMScroll').scrollTo.bind(null, o, 750, false, false, p), q);
    }
  };
  f.exports = m;
}), null);
__d('enumerate', [], (function a(b, c, d, e, f, g) {
  'use strict';
  f.exports = function(h) {
    return h.FB_enumerate;
  }(b);
}), null);
__d('EmojiImageURL', ['invariant', 'EmojiStaticConfig', 'EmojiConfig'], (function a(b, c, d, e, f, g, h) {
  function i(k, l) {
    k = b.unescape(encodeURIComponent(k));
    for (var m = 0; m < k.length; m++) {
      l = (l << 5) - l + k.charCodeAt(m);
      l &= 4294967295;
    }
    return (l & 255).toString(16);
  }

  function j(k, l, m) {
    l in c('EmojiStaticConfig').supportedSizes || h(0);
    var n = c('EmojiConfig').pixelRatio + '/' + l + '/' + k + c('EmojiStaticConfig').fileExt,
      o = i(n, c('EmojiStaticConfig').checksumBase);
    return c('EmojiConfig').schemaAuth + '/' + m + o + '/' + n;
  }
  f.exports = {
    getMessengerURL: function k(l, m) {
      return j(l, m, c('EmojiStaticConfig').types.MESSENGER);
    },
    getFBEmojiURL: function k(l) {
      var m = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];
      return j(l, m, c('EmojiStaticConfig').types.FBEMOJI);
    },
    getFBEmojiExtendedURL: function k(l) {
      var m = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];
      return j(l, m, c('EmojiStaticConfig').types.FB_EMOJI_EXTENDED);
    }
  };
}), null);
__d('cssVar', [], (function a(b, c, d, e, f, g) {
  function h(i) {
    throw new Error('cssVar' + '("' + i + '"): Unexpected class transformation.');
  }
  f.exports = h;
}), null);
__d('XHRHttpError', [], (function a(b, c, d, e, f, g) {
  'use strict';
  var h = 'HTTP_CLIENT_ERROR',
    i = 'HTTP_PROXY_ERROR',
    j = 'HTTP_SERVER_ERROR',
    k = 'HTTP_TRANSPORT_ERROR',
    l = 'HTTP_UNKNOWN_ERROR',
    m = {
      HTTP_CLIENT_ERROR: h,
      HTTP_PROXY_ERROR: i,
      HTTP_SERVER_ERROR: j,
      HTTP_TRANSPORT_ERROR: k,
      HTTP_UNKNOWN_ERROR: l,
      getErrorCode: function n(o, p) {
        if (p === 0) {
          var q = o.getProtocol();
          if (q === 'file' || q === 'ftp') return null;
          return k;
        } else if (p >= 100 && p < 200) {
          return i;
        } else if (p >= 200 && p < 300) {
          return null;
        } else if (p >= 400 && p < 500) {
          return h;
        } else if (p >= 500 && p < 600) {
          return j;
        } else if (p >= 12001 && p < 12156) {
          return k;
        } else return l;
      }
    };
  f.exports = m;
}), null);
__d('xhrSimpleDataSerializer', [], (function a(b, c, d, e, f, g) {
  'use strict';

  function h(i) {
    var j = [];
    for (var k in i) j.push(encodeURIComponent(k) + '=' + encodeURIComponent(i[k]));
    return j.join('&');
  }
  f.exports = h;
}), null);
__d('XHRRequest', ['invariant', 'Env', 'ErrorUtils', 'TimeSlice', 'URI', 'XHRHttpError', 'ZeroRewrites', 'getAsyncHeaders', 'xhrSimpleDataSerializer'], (function a(b, c, d, e, f, g, h) {
  var i = {
      errorCode: null,
      errorMsg: null,
      errorType: null
    },
    j = {
      loadedBytes: null,
      totalBytes: null
    };

  function k(l) {
    'use strict';
    this.setURI(l);
    this.setResponseType(null);
    this.setMethod('POST');
    this.setTransportBuilder(c('ZeroRewrites').getTransportBuilderForURI(this.getURI()));
    this.setDataSerializer(c('xhrSimpleDataSerializer'));
  }
  k.prototype.setURI = function(l) {
    'use strict';
    this.$XHRRequest1 = c('ZeroRewrites').rewriteURI(new(c('URI'))(l));
    return this;
  };
  k.prototype.getURI = function() {
    'use strict';
    return this.$XHRRequest1;
  };
  k.prototype.setResponseType = function(l) {
    'use strict';
    this.$XHRRequest2 = l;
    return this;
  };
  k.prototype.setMethod = function(l) {
    'use strict';
    this.$XHRRequest3 = l;
    return this;
  };
  k.prototype.getMethod = function() {
    'use strict';
    return this.$XHRRequest3;
  };
  k.prototype.setData = function(l) {
    'use strict';
    this.$XHRRequest4 = l;
    return this;
  };
  k.prototype.getData = function() {
    'use strict';
    return this.$XHRRequest4;
  };
  k.prototype.setRawData = function(l) {
    'use strict';
    this.$XHRRequest5 = l;
    return this;
  };
  k.prototype.setRequestHeader = function(l, m) {
    'use strict';
    if (!this.$XHRRequest6) this.$XHRRequest6 = {};
    this.$XHRRequest6[l] = m;
    return this;
  };
  k.prototype.setTimeout = function(l) {
    'use strict';
    this.$XHRRequest7 = l;
    return this;
  };
  k.prototype.getTimeout = function() {
    'use strict';
    return this.$XHRRequest7;
  };
  k.prototype.setResponseHandler = function(l) {
    'use strict';
    this.$XHRRequest8 = l;
    return this;
  };
  k.prototype.setErrorHandler = function(l) {
    'use strict';
    this.$XHRRequest9 = l;
    return this;
  };
  k.prototype.getErrorHandler = function() {
    'use strict';
    return this.$XHRRequest9;
  };
  k.prototype.setAbortHandler = function(l) {
    'use strict';
    this.$XHRRequest10 = l;
    return this;
  };
  k.prototype.getAbortHandler = function() {
    'use strict';
    return this.$XHRRequest10;
  };
  k.prototype.setTimeoutHandler = function(l) {
    'use strict';
    this.$XHRRequest11 = l;
    return this;
  };
  k.prototype.setUploadProgressHandler = function(l) {
    'use strict';
    this.$XHRRequest12 = l;
    return this;
  };
  k.prototype.setDownloadProgressHandler = function(l) {
    'use strict';
    this.$XHRRequest13 = l;
    return this;
  };
  k.prototype.setTransportBuilder = function(l) {
    'use strict';
    this.$XHRRequest14 = l;
    return this;
  };
  k.prototype.setDataSerializer = function(l) {
    'use strict';
    this.$XHRRequest15 = l;
    return this;
  };
  k.prototype.send = function() {
    'use strict';
    var l = this.$XHRRequest7,
      m = this.$XHRRequest14(),
      n = this.getURI();
    this.$XHRRequest16 = m;
    var o;
    this.$XHRRequest3 === 'POST' || !this.$XHRRequest5 || h(0);
    if (c('Env').force_param) Object.assign(this.$XHRRequest4, c('Env').force_param);
    if (this.$XHRRequest3 === 'GET' || this.$XHRRequest5) {
      n.addQueryData(this.$XHRRequest4);
      o = this.$XHRRequest5;
    } else o = this.$XHRRequest15(this.$XHRRequest4);
    m.onreadystatechange = this.$XHRRequest17();
    if (m.upload && this.$XHRRequest12) m.upload.onprogress = this.$XHRRequest18.bind(this);
    if (this.$XHRRequest13) m.onprogress = this.$XHRRequest19.bind(this);
    if (l) this.$XHRRequest20 = setTimeout(this.$XHRRequest21.bind(this), l);
    m.open(this.$XHRRequest3, n.toString(), true);
    var p = false;
    if (this.$XHRRequest6)
      for (var q in this.$XHRRequest6) {
        if (q.toLowerCase() === 'content-type') p = true;
        m.setRequestHeader(q, this.$XHRRequest6[q]);
      }
    if (this.$XHRRequest3 == 'POST' && !this.$XHRRequest5 && !p) m.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var r = c('getAsyncHeaders')(n);
    Object.keys(r).forEach(function(s) {
      m.setRequestHeader(s, r[s]);
    });
    if (this.$XHRRequest2 === 'arraybuffer')
      if ('responseType' in m) {
        m.responseType = 'arraybuffer';
      } else if ('overrideMimeType' in m) {
      m.overrideMimeType('text/plain; charset=x-user-defined');
    } else if ('setRequestHeader' in m) m.setRequestHeader('Accept-Charset', 'x-user-defined');
    if (this.$XHRRequest2 === 'blob') m.responseType = this.$XHRRequest2;
    m.send(o);
  };
  k.prototype.abort = function() {
    'use strict';
    this.$XHRRequest22();
    if (this.$XHRRequest10) c('ErrorUtils').applyWithGuard(this.$XHRRequest10, null, null, null, 'XHRRequest:_abortHandler');
  };
  k.prototype.$XHRRequest22 = function() {
    'use strict';
    var l = this.$XHRRequest16;
    if (l) {
      l.onreadystatechange = null;
      l.abort();
    }
    this.$XHRRequest23();
  };
  k.prototype.$XHRRequest21 = function() {
    'use strict';
    this.$XHRRequest22();
    if (this.$XHRRequest11) c('ErrorUtils').applyWithGuard(this.$XHRRequest11, null, null, null, 'XHRRequest:_abortHandler');
  };
  k.prototype.$XHRRequest24 = function(l) {
    'use strict';
    if (this.$XHRRequest2)
      if ('response' in l) {
        return l.response;
      } else if (this.$XHRRequest2 === 'arraybuffer')
      if (window.VBArray) return window.VBArray(l.responseBody).toArray();
    return l.responseText;
  };
  k.prototype.$XHRRequest17 = function() {
    'use strict';
    var l = c('TimeSlice').getGuardedContinuation('XHRRequest onreadystatechange continuation'),
      m = c('TimeSlice').guard(function(n) {
        for (var o = arguments.length, p = Array(o > 1 ? o - 1 : 0), q = 1; q < o; q++) p[q - 1] = arguments[q];
        return n.apply(undefined, p);
      }, 'XHRRequest onreadystatechange', {
        isContinuation: false
      });
    return function() {
      var n = this.$XHRRequest16,
        o = n.readyState;
      if (o >= 2) {
        var p = o === 4,
          q = this.getURI(),
          r = c('XHRHttpError').getErrorCode(q, n.status),
          s = this.$XHRRequest8;
        if (r !== null) {
          if (p) {
            i.errorCode = r;
            i.errorMsg = this.$XHRRequest24(n);
            i.errorType = n.status ? 'HTTP ' + n.status : 'HTTP';
            if (this.$XHRRequest9) {
              c('ErrorUtils').applyWithGuard(l.bind(undefined, this.$XHRRequest9), null, [i], null, 'XHRRequest:_errorHandler');
            } else l(function() {});
          }
        } else if (s) {
          var t = null;
          if (s.includeHeaders) t = n.getAllResponseHeaders();
          if (p || s.parseStreaming && o === 3) {
            var u = p ? l : m;
            c('ErrorUtils').applyWithGuard(u.bind(undefined, s), null, [this.$XHRRequest24(n), t, p], null, 'XHRRequest:handler');
          }
        } else l(function() {});
        if (p) this.$XHRRequest23();
      }
    }.bind(this);
  };
  k.prototype.$XHRRequest18 = function(l) {
    'use strict';
    j.loadedBytes = l.loaded;
    j.totalBytes = l.total;
    if (this.$XHRRequest12) c('ErrorUtils').applyWithGuard(this.$XHRRequest12, null, [j], null, 'XHRRequest:_uploadProgressHandler');
  };
  k.prototype.$XHRRequest19 = function(l) {
    'use strict';
    var m = {
      loadedBytes: l.loaded,
      totalBytes: l.total
    };
    if (this.$XHRRequest13) c('ErrorUtils').applyWithGuard(this.$XHRRequest13, null, [m], null, 'XHRRequest:_downloadProgressHandler');
  };
  k.prototype.$XHRRequest23 = function() {
    'use strict';
    clearTimeout(this.$XHRRequest20);
    delete this.$XHRRequest16;
  };
  f.exports = k;
}), null);
__d('TokenizeUtil', [], (function a(b, c, d, e, f, g) {
  var h = /[ ]+/g,
    i = /[^ ]+/g,
    j = new RegExp(k(), 'g');

  function k() {
    return '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;' + '\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f' + '\uff3b-\uff40\uff5b-\uff65\u2E2E\u061f\u066a-\u066c\u061b\u060c\u060d' + '\uFD3e\uFD3F\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e' + '\u00a1-\u00b1\u00b4-\u00b8\u00ba\u00bb\u00bf]';
  }
  var l = {},
    m = {
      a: "\u0430 \u00e0 \u00e1 \u00e2 \u00e3 \u00e4 \u00e5 \u0101",
      b: "\u0431",
      c: "\u0446 \u00e7 \u010d",
      d: "\u0434 \u00f0 \u010f \u0111",
      e: "\u044d \u0435 \u00e8 \u00e9 \u00ea \u00eb \u011b \u0113",
      f: "\u0444",
      g: "\u0433 \u011f \u0123",
      h: "\u0445 \u0127",
      i: "\u0438 \u00ec \u00ed \u00ee \u00ef \u0131 \u012b",
      j: "\u0439",
      k: "\u043a \u0138 \u0137",
      l: "\u043b \u013e \u013a \u0140 \u0142 \u013c",
      m: "\u043c",
      n: "\u043d \u00f1 \u0148 \u0149 \u014b \u0146",
      o: "\u043e \u00f8 \u00f6 \u00f5 \u00f4 \u00f3 \u00f2",
      p: "\u043f",
      r: "\u0440 \u0159 \u0155",
      s: "\u0441 \u015f \u0161 \u017f",
      t: "\u0442 \u0165 \u0167 \u00fe",
      u: "\u0443 \u044e \u00fc \u00fb \u00fa \u00f9 \u016f \u016b",
      v: "\u0432",
      y: "\u044b \u00ff \u00fd",
      z: "\u0437 \u017e",
      ae: "\u00e6",
      oe: "\u0153",
      ts: "\u0446",
      ch: "\u0447",
      ij: "\u0133",
      sh: "\u0448",
      ss: "\u00df",
      ya: "\u044f"
    };
  for (var n in m) {
    var o = m[n].split(' ');
    for (var p = 0; p < o.length; p++) l[o[p]] = n;
  }

  function q(x) {
    return x ? x.replace(j, ' ') : '';
  }

  function r(x) {
    x = x.toLowerCase();
    var y = '',
      z = '';
    for (var aa = x.length; aa--;) {
      z = x.charAt(aa);
      y = (l[z] || z) + y;
    }
    return y.replace(h, ' ');
  }

  function s(x) {
    var y = [],
      z = i.exec(x);
    while (z) {
      z = z[0];
      y.push(z);
      z = i.exec(x);
    }
    return y;
  }

  function t(x) {
    var y = {};
    return function z(aa, ba) {
      if (!y.hasOwnProperty(aa)) {
        var ca = r(aa),
          da = x(ca);
        y[aa] = {
          value: aa,
          flatValue: ca,
          tokens: s(da),
          isPrefixQuery: da && da[da.length - 1] != ' '
        };
      }
      if (ba && typeof y[aa].sortedTokens == 'undefined') {
        y[aa].sortedTokens = y[aa].tokens.slice();
        y[aa].sortedTokens.sort(function(ea, fa) {
          return fa.length - ea.length;
        });
      }
      return y[aa];
    };
  }
  var u = t(q);

  function v(x, y, z) {
    var aa = u(y, x == 'prefix'),
      ba = x == 'prefix' ? aa.sortedTokens : aa.tokens,
      ca = u(z).tokens,
      da = {},
      ea = aa.isPrefixQuery && x == 'query' ? ba.length - 1 : null,
      fa = function ga(ha, ia) {
        for (var ja = 0; ja < ca.length; ++ja) {
          var ka = ca[ja];
          if (!da[ja] && (ka == ha || (x == 'query' && ia === ea || x == 'prefix') && ka.indexOf(ha) === 0)) return da[ja] = true;
        }
        return false;
      };
    return Boolean(ba.length && ba.every(fa));
  }
  var w = {
    flatten: r,
    parse: u,
    getPunctuation: k,
    makeParse: t,
    isExactMatch: v.bind(null, 'exact'),
    isQueryMatch: v.bind(null, 'query'),
    isPrefixMatch: v.bind(null, 'prefix'),
    tokenize: s
  };
  f.exports = w;
}), null);
__d('isValidUniqueID', [], (function a(b, c, d, e, f, g) {
  function h(i) {
    return (i !== null && i !== undefined && i !== '' && (typeof i === 'string' || typeof i === 'number'));
  }
  f.exports = h;
}), null);
__d('SearchableEntry', ['invariant', 'HTML', 'isValidUniqueID', 'FbtResult'], (function a(b, c, d, e, f, g, h) {
  function i(k) {
    if (!k) {
      return '';
    } else if (typeof k === 'string') {
      return k;
    } else if (k instanceof c('FbtResult')) {
      return k.toString();
    } else if (typeof k === 'object') {
      var l = c('HTML').replaceJSONWrapper(k);
      if (c('HTML').isHTML(l)) {
        var m = l.getRootNode();
        return m.textContent || m.innerText || '';
      } else return '';
    } else return '';
  }

  function j(k) {
    'use strict';
    c('isValidUniqueID')(k.uniqueID) || h(0);
    this.$SearchableEntry8 = k.uniqueID + '';
    if (k.title instanceof c('FbtResult')) k.title = k.title.toString();
    k.title != null && typeof k.title === 'string' || h(0);
    this.$SearchableEntry6 = k.title;
    this.$SearchableEntry3 = k.order || 0;
    this.$SearchableEntry5 = i(k.subtitle);
    this.$SearchableEntry2 = k.keywordString || '';
    this.$SearchableEntry4 = k.photo || '';
    this.$SearchableEntry9 = k.uri || '';
    this.$SearchableEntry7 = k.type || '';
    var l = k.auxiliaryData || {};
    this.$SearchableEntry1 = l;
  }
  j.prototype.getUniqueID = function() {
    'use strict';
    return this.$SearchableEntry8;
  };
  j.prototype.getOrder = function() {
    'use strict';
    return this.$SearchableEntry3;
  };
  j.prototype.getTitle = function() {
    'use strict';
    return this.$SearchableEntry6;
  };
  j.prototype.getSubtitle = function() {
    'use strict';
    return this.$SearchableEntry5;
  };
  j.prototype.getKeywordString = function() {
    'use strict';
    return this.$SearchableEntry2;
  };
  j.prototype.getPhoto = function() {
    'use strict';
    return this.$SearchableEntry4;
  };
  j.prototype.getURI = function() {
    'use strict';
    return this.$SearchableEntry9;
  };
  j.prototype.getType = function() {
    'use strict';
    return this.$SearchableEntry7;
  };
  j.prototype.getAuxiliaryData = function() {
    'use strict';
    return this.$SearchableEntry1;
  };
  j.prototype.toPlainObject = function() {
    'use strict';
    return {
      auxiliaryData: this.$SearchableEntry1,
      keywordString: this.$SearchableEntry2,
      order: this.$SearchableEntry3,
      photo: this.$SearchableEntry4,
      subtitle: this.$SearchableEntry5,
      title: this.$SearchableEntry6,
      type: this.$SearchableEntry7,
      uniqueID: this.$SearchableEntry8,
      uri: this.$SearchableEntry9
    };
  };
  f.exports = j;
}), null);
__d("XCommentEmbedPluginEmbedAsyncDialogController", ["XController"], (function a(b, c, d, e, f, g) {
  f.exports = c("XController").create("\/plugins\/comment-embed\/async\/embed\/dialog\/", {
    comment_id: {
      type: "String",
      required: true
    },
    width: {
      type: "Int"
    },
    __asyncDialog: {
      type: "Int"
    }
  });
}), null);
