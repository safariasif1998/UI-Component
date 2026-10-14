export type State = {
  value: string;
  titleVale: string;
  favoriteFont: string;
  titleFont: string;
  contentFont: string;
  titleSize: string;
  contentSize: string;
  titleUnits: string;
  contentUnits: string;
  titleLineHeight: number;
  contentLineHeight: number;
  titleFontWeight: number;
  contentFontWeight: number;
};

export type Action =
  | { type: "CHANGE_CONTENT"; payload: string }
  | { type: "CHANGE_CONTENT_FONT"; payload: string }
  | { type: "CHANGE_TITLE_FONT"; payload: string }
  | { type: "CHANGE_FAVORITE_FONT"; payload: string }
  | { type: "CHANGE_TITLE"; payload: string }
  | { type: "CHANGE_TITLE_LINE_HEIGHT"; payload: number }
  | { type: "CHANGE_CONTENT_LINE_HEIGHT"; payload: number }
  | { type: "CHANGE_TITLE_FONT_WEIGHT"; payload: number }
  | { type: "CHANGE_CONTENT_FONT_WEIGHT"; payload: number }
  | { type: "CHANGE_TITLE_SIZE"; payload: string }
  | { type: "CHANGE_CONTENT_SIZE"; payload: string }
  | { type: "CHANGE_TITLE_UNITS"; payload: string }
  | { type: "CHANGE_CONTENT_UNITS"; payload: string };

export const initState: State = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam efficitur dictum. Praesent ut ullamcorper nisi. Suspendisse potenti. Phasellus erat sem, efficitur tincidunt porta non, aliquam non dui. Proin malesuada tortor sit amet dignissim posuere. Sed pharetra porttitor dolor, in sagittis tellus posuere nec. Fusce vulputate venenatis tortor sed posuere.",
  titleVale:
    "Lorem Ipsum has been the industry's standard dummy text ever since",
  favoriteFont: "",
  titleFont: "",
  contentFont: "",
  titleSize: "20",
  contentSize: "12",
  titleUnits: "px",
  contentUnits: "px",
  titleLineHeight: 1.5,
  contentLineHeight: 1.5,
  titleFontWeight: 400,
  contentFontWeight: 400,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_CONTENT":
      return {
        ...state,
        value: action.payload,
      };

    case "CHANGE_CONTENT_FONT":
      return {
        ...state,
        contentFont: action.payload,
      };

    case "CHANGE_TITLE_FONT":
      return {
        ...state,
        titleFont: action.payload,
      };
    case "CHANGE_TITLE_SIZE":
      return {
        ...state,
        titleSize: action.payload,
      };

    case "CHANGE_CONTENT_SIZE":
      return {
        ...state,
        contentSize: action.payload,
      };
    case "CHANGE_TITLE_UNITS":
      return {
        ...state,
        titleUnits: action.payload,
      };

    case "CHANGE_CONTENT_UNITS":
      return {
        ...state,
        contentUnits: action.payload,
      };
    case "CHANGE_FAVORITE_FONT":
      return {
        ...state,
        favoriteFont: action.payload,
      };

    case "CHANGE_TITLE":
      return {
        ...state,
        titleVale: action.payload,
      };
    case "CHANGE_TITLE_LINE_HEIGHT":
      return {
        ...state,
        titleLineHeight: action.payload,
      };
    case "CHANGE_CONTENT_LINE_HEIGHT":
      return {
        ...state,
        contentLineHeight: action.payload,
      };
    case "CHANGE_TITLE_FONT_WEIGHT":
      return {
        ...state,
        titleFontWeight: action.payload,
      };
    case "CHANGE_CONTENT_FONT_WEIGHT":
      return {
        ...state,
        contentFontWeight: action.payload,
      };

    default:
      return state;
  }
};
