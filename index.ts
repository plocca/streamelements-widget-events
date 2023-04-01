export enum WindowEventType {
  /** Fired when a new follower comes through */
  FollowerLatest = 'follower-latest',
  /**
   * Fired when a new subscriber comes through.
   *
   * @warn Be careful! This event will be fired for both regular subscribers,
   * direct subscribers and bulk subscribers. If a subscription is a community
   * (bulk) subscription, then this event will be fired for the initial bulk
   * gift and then, subsequently, for each receiver.
   */
  SubscriberLatest = 'subscriber-latest',
  /**
   * Fired for twitch host events.
   *
   * @warn Twitch has removed this feature and this library does not support
   * it.
   */
  HostLatest = 'host-latest',
  /** Fired when a cheer happens. */
  CheerLatest = 'cheer-latest',
  /** Fired for a tip. */
  TipLatest = 'tip-latest',
  /** Fired for a raid. */
  RaidLatest = 'raid-latest',
  /** Fired for a chat message */
  Message = 'message',
  /** Fired when a moderator deletes a message */
  DeleteMessage = 'delete-message',
  /** Fired when a moderator removes all the messages of a user */
  DeleteMessages = 'delete-messages',
  /** Unknown and unsupported */
  EventSkip = 'event:skip',
  /** Unknown and unsupported */
  AlertServiceToggleSound = 'alertService:toggleSound',
  /** Unknown and unsupported */
  BotCounter = 'bot:counter',
  /**
   * Fired when the internal StreamElements KV Store is updated. Unsupported.
   */
  KvStoreUpdate = 'kvstore:update',
  /**
   * Fired when a button in the left tab for customizing widget behavior is
   * clicked.
   */
  WidgetButton = 'widget-button',
}

/**
 * Represents the subscription tier a twitch user might do.
 */
export enum SubscribeTier {
  /** Amazon Prime */
  Prime = 'prime',
  /** 4.99$ */
  First = '1000',
  /** 9.99$ */
  Second = '2000',
  /** 24.99$ */
  Third = '3000',
}

/**
 * Represents an event that StreamElements might fire.
 */
export interface Event {

}

/**
 * Event fired given a follower-latest event.
 */
export interface FollowerLatestEvent extends Event {
  /** Unknown */
  amount: number
  /** Unknown */
  count: number
  /** Whether the event is a test event fired from the StreamElements overlay design interface. */
  isTest: boolean
  /** Unknown */
  items: unknown[]
  /** Unknown */
  month: string
  /** Username of the follower */
  name: string
  /** Unknown */
  originalEventName: string
  /** Unknown */
  sessionTop: boolean
  /** Unknown */
  tier: SubscribeTier
  /** Unknown */
  type: string
}

/**
 * Event fired given a subscriber-latest event.
 */
export interface SubscriberLatestEvent extends Event {
  /**
   * The number of months subscribed.
   *
   * If this is a gift this will be one, or 2+ if this is a bulk gift.
   */
  amount: number

  /** Unknown */
  count: number

  /**
   * Whether the event is a test event fired from the StreamElements overlay design interface.
   *
   * Appears to be undefined for bulk gifts.
   */
  isTest?: boolean

  /**
   * Unknown
   *
   * Appears to be undefined for bulk gifts.
   */
  items?: unknown[]

  /** Subscriber-sent message accompanying the subscribal */
  message: string

  /**
   * Unknown
   *
   * Appears to be undefined for bulk gifts.
   */
  month?: string

  /** Username of the subscriber.
   *
   * If the sub has been gifted, this refers to the receiver. For a bulk gift event, this value
   * will be the same as the sender.
   */
  name: string

  /** Unknown */
  originalEventName: string

  /**
   * Unknown
   *
   * Appears to be undefined for bulk gifts.
   */
  sessionTop?: boolean

  /** The tier a twitch user might subscribe on. */
  tier: SubscribeTier

  /** Unknown */
  type: string

  /** If the sub has been gifted, this is defined to be true */
  gifted?: boolean

  /** If the sub has been bulk-gifted, this is defined as true. */
  bulkGifted?: boolean

  /** If the sub is gifted, then this will contain the username of the gifter */
  sender?: string

  /** Unknown. Only exists if the sub is gifted. */
  subExtension?: boolean

  /**
   * Whether the current event is a community gift.
   *
   * @warn This will be set to true for events that occur on giftees. When a bulk gift occurs, the
   *       initial bulk gift event will not contain this field, but since SE emits each gifted sub
   *       as an event, those subsequent fields receive `isCommunityGift` as true.
   */
  isCommunityGift?: boolean

  /**
   * Unknown
   *
   * Appears to only exist for bulk-gift sub giftee events.
   */
  playedAsCommunityGift?: boolean
}

/**
 * Event fired given a cheer-latest event.
 */
export interface CheerLatestEvent extends Event {
  /** The number of bits cheered */
  amount: number
  /** Unknown */
  count: number
  /** Whether the event is a test event fired from the StreamElements overlay design interface. */
  isTest: boolean
  /** Unknown */
  items: unknown[]
  /** Accompanying message */
  message: string
  /** Unknown */
  month: string
  /** Username of the sender */
  name: string
  /** Unknown */
  originalEventName: string
  /** Unknown */
  sessionTop: boolean
  /** Unknown. */
  tier: SubscribeTier
  /** Whether text-to-speech is requested. */
  tts: boolean
  /** Unknown */
  type: string
}

/**
 * Event fired upon tip-latest
 */
export interface TipLatestEvent extends Event {
  /** The tip amount */
  amount: number
  /** Unknown */
  count: number
  /** Whether the event is a test event fired from the StreamElements overlay design interface. */
  isTest: boolean
  /** Unknown */
  items: unknown[]
  /** Accompanying message */
  message: string
  /** Unknown */
  month: string
  /** Username of the sender */
  name: string
  /** Unknown */
  originalEventName: string
  /** Unknown */
  sessionTop: boolean
  /** Unknown */
  tier: SubscribeTier
  /** Unknown */
  type: string
}

/**
 * Event fired upon raid-latest
 */
export interface RaidLatestEvent extends Event {
  /** Number of viewers raiding */
  amount: number
  /** Unknown */
  count: number
  /** Whether the event is a test event fired from the StreamElements overlay design interface. */
  isTest: boolean
  /** Unknown */
  items: unknown[]
  /** Unknown */
  month: string
  /** Username of the raid initiator */
  name: string
  /** Unknown */
  originalEventName: string
  /** Unknown */
  sessionTop: boolean
  /** Unknown */
  tier: SubscribeTier
  /** Unknown */
  type: string
}

/**
 * The services that are supported on StreamElements.
 */
export enum SupportedService {
  Twitch = 'twitch',
  Youtube = 'youtube',
  Mixer = 'mixer',
}

/**
 * The badges that are supported on StreamElements.
 */
export enum SupportedBadge {
  Broadcaster = 'broadcaster',
  Moderator = 'moderator',
  VIP = 'vip',
  ArtistBadge = 'artist-badge',
  Subscriber = 'subscriber',
  Premium = 'premium',
  Partner = 'partner',
}

/**
 * Represents a badge a user may have attached to them.
 */
export interface Badge {
  /** The badge type identifier */
  type: SupportedBadge
  /** The version of the badge */
  version: string
  /** The URL to the badge icon */
  url: string
}

/**
 * Represents an emote a user may have attached to a message.
 */
export interface Emote {
  /** The emote type (provider) */
  type: string
  /** The emote identifier, for example "kappa" */
  name: string
  /** The unique identifier of the emote */
  id: string
  /** Whether the emote is a gif or not */
  gif: boolean
  /** The URLs to the emote image */
  urls: {
    /** 1x Resolution */
    '1': string
    /** 2x Resolution */
    '2': string
    /** 4x Resolution */
    '4': string
  }
  /** The character at which the emote starts. */
  start: number
  /** The character at which the emote ends. */
  end: number
}

/**
 * Fired with a `message` event.
 */
export interface MessageEvent extends Event {
  /** Represents the platform the message is sent from */
  service: SupportedService
  data: {
    /** UNIX Timestamp of when the message was sent */
    time: number
    tags: {
      /** Unknown */
      'badge-info': string

      /**
       * Comma-separated string of tags and versions in format "<badge>/<version>,"[]
       *
       * Prefer using data.badges
       */
      badges: string

      /**
       * Color of the username.
       *
       * Prefer using data.displayColor.
       */
      color: string

      /**
       * The user's name as it should be displayed.
       *
       * Prefer using data.nick
       */
      'display-name': string

      /**
       * Comma-separated string of emote-id and character slice "<emote-id>:<begin>-<end>,"[]
       *
       * Prefer using data.emotes
       */
      emotes: string

      /** Whether this is the user's first time chatting in this channel */
      'first-msg': '0' | '1'

      /** Unknown */
      flags: string

      /** The unique message ID */
      id: string

      /** Whether the user is a moderator */
      mod: '0' | '1'

      /** Whether the user is returning. */
      'returning-chatter': '0' | '1'

      /** Unknown */
      'room-id': string

      /** Whether the user is a subscriber */
      subscriber: '0' | '1'

      /**
       * UNIX Timestamp of when the message was sent.
       *
       * Prefer using data.time
       */
      'tmi-sent-ts': string

      /** Whether the user is using Twitch Turbo */
      'turbo': '0' | '1'

      /** The twitch user's ID */
      'user-id': string

      /** Unknown */
      'user-type': string

      /** If this message is a reply, then the displayName of the author of the original message.
       */
      'reply-parent-display-name'?: string

      /** If this message is a reply, then the body of the original message. */
      'reply-parent-msg-body'?: string

      /** If this message is a reply, then the id of the original message */
      'reply-parent-msg-id'?: string

      /** If this message is a reply, then the id of the original message's author user. */
      'reply-parent-user-id'?: string

      /** If this message is a reply, then the user nick of the original message's author */
      'reply-parent-user-login'?: string
    }
    /** The user's nickname */
    nick: string
    /** The user's ID */
    userId: string
    /** The user's username as it should be displayed. */
    displayName: string
    /** The user's username color to use */
    displayColor: string
    /** The badges the user has */
    badges: Badge[]
    /** The channel to send the message to */
    channel: string
    /** The message text, including emotes in it. */
    text: string
    /** The emotes that are contained within the message */
    emotes: Emote[]
    /** The unique message identifier */
    msgId: string
  }
}

/**
 * Event fired for delete-message
 */
export interface DeleteMessageEvent extends Event {
  /** The deleted message id */
  msgId: string
}

/**
 * Event fired for delete-messages
 */
export interface DeleteMessagesEvent extends Event {
  /** The user of who the messages should be deleted */
  userId: string
}

/**
 * Event fired for widget-button
 */
export interface WidgetButtonEvent extends Event {
}

/**
 * Base object that StreamElements fires in a window.event.
 */
export interface EventContainer {
  listener: WindowEventType
  event: Event | EventContainer
}

export interface EventObject {
  detail: EventContainer
  /** Possibly other fields */
  [x: string | number | symbol]: unknown
}

type EventDelegateMap = {
  [eventType in WindowEventType]?: (evt: Event) => void
};

export function delegateEvent(eventObject: EventObject, delegates: EventDelegateMap) {
  const { event } = eventObject.detail;
  const evtHandler = delegates[eventObject.detail.listener] || (() => {});

  switch (eventObject.detail.listener) {
    case WindowEventType.FollowerLatest:
      return evtHandler(event as FollowerLatestEvent);
    case WindowEventType.SubscriberLatest:
      return evtHandler(event as SubscriberLatestEvent);
    case WindowEventType.CheerLatest:
      return evtHandler(event as CheerLatestEvent);
    case WindowEventType.TipLatest:
      return evtHandler(event as TipLatestEvent);
    case WindowEventType.RaidLatest:
      return evtHandler(event as RaidLatestEvent);
    case WindowEventType.Message:
      return evtHandler(event as MessageEvent);
    case WindowEventType.DeleteMessage:
      return evtHandler(event as DeleteMessageEvent);
    case WindowEventType.DeleteMessages:
      return evtHandler(event as DeleteMessagesEvent);
    case WindowEventType.WidgetButton:
      return evtHandler(event as WidgetButtonEvent);
    default:
      /* StreamElements throws some random events that are unsupported in this library. */
      return undefined;
  }
}

export enum WindowEvent {
  EventReceived = 'onEventReceived',
  WidgetLoad = 'onWidgetLoad',
  SessionUpdate = 'onSessionUpdate',
}
