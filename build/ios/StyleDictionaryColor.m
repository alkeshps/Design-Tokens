
//
// StyleDictionaryColor.m
//

// Do not edit directly, this file was auto-generated.


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.910f green:0.118f blue:0.118f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.961f blue:0.973f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.376f green:0.376f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end