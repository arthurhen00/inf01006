import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator'

export function IsOverallMaxGreaterThanMin(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsOverallMaxGreaterThanMinConstraint,
    })
  }
}

@ValidatorConstraint({ name: 'isOverallMaxGreaterThanMin' })
export class IsOverallMaxGreaterThanMinConstraint implements ValidatorConstraintInterface {
  validate(overallMax: number, args: ValidationArguments) {
    const obj = args.object as any
    return overallMax >= obj.overallMin
  }
}
