import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

/**
   * Function to help handle Tailwind classes using TwMerge which solves conflict name of classes and CLSX which adds the possibility to write classes as objects.
   *
   * @param defaultClasses - Tailwind default classes;
   * @param specificClasses - Component specific Tailwind classes;
   * @param conditionalClasses - Conditional Tailwind classes;
   * @returns Tailwind classes
   *
   * Example: className={cn(defaultClasses, customClasses, { class : condition1, class2 : condition2 })}
*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
