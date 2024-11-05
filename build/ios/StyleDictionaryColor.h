
//
// StyleDictionaryColor.h
//

// Do not edit directly, this file was auto-generated.


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
LightThemeInfBrandColor,
LightThemeInfPrimaryBgColor,
LightThemeInfSecondaryBgColor,
LightThemeInfPrimaryTextColor,
LightThemeInfSecondaryTextColor,
LightThemeInfTertiaryTextColor
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end