"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
exports.ListItem = react_1.default.memo((props) => {
    const height = (0, react_native_reanimated_1.useSharedValue)(props.defaultItemHeight);
    const [expanded, setExpanded] = react_1.default.useState(false);
    const style = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return {
            height: (0, react_native_reanimated_1.withTiming)(height.value, {
                duration: (_a = props.duration) !== null && _a !== void 0 ? _a : 500,
                easing: react_native_reanimated_1.Easing.bezier((_c = (_b = props.easing) === null || _b === void 0 ? void 0 : _b.x1) !== null && _c !== void 0 ? _c : 0.25, (_e = (_d = props.easing) === null || _d === void 0 ? void 0 : _d.y1) !== null && _e !== void 0 ? _e : 0.1, (_g = (_f = props.easing) === null || _f === void 0 ? void 0 : _f.x2) !== null && _g !== void 0 ? _g : 0.25, (_j = (_h = props.easing) === null || _h === void 0 ? void 0 : _h.y2) !== null && _j !== void 0 ? _j : 1),
            }),
        };
    });
    function setItemHeight() {
        if (height.value === props.defaultItemHeight) {
            setExpanded(true);
            height.value = props.expandItemHeight;
            if (props.onItemPress) {
                props.onItemPress(true);
            }
        }
        else {
            setExpanded(false);
            height.value = props.defaultItemHeight;
            if (props.onItemPress) {
                props.onItemPress(false);
            }
        }
    }
    return (react_1.default.createElement(react_native_reanimated_1.default.View, { style: [props.itemStyle, style] },
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.touchableOpacity, onPress: setItemHeight },
            props.renderListItem && props.renderListItem(props.item),
            props.renderExpandListItem &&
                expanded &&
                props.renderExpandListItem(props.item))));
});
const styles = react_native_1.StyleSheet.create({
    touchableOpacity: {
        width: "100%",
        height: "100%",
    },
});
