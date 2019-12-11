import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentFormat'
})
export class PercentFormatPipe implements PipeTransform {
  public transform(value: number, max: number = 100): string {
    const percentage = Math.round((value / max) * 100);

    return `${percentage}%`;
  }
}
