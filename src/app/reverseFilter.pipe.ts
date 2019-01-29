import {Pipe,PipeTransform} from '@angular/core'

@Pipe(
    {
        name :'reverseString'
    }
)
export class ReverseStringClass implements PipeTransform{
    transform(value:string):string{
        let newStr:string="";
        for(var i=value.length;i>=0;i--){
            newStr += value.charAt(i);
        }
        return newStr;
    }
}



@Pipe({name: 'uselessPipe'})
export class uselessPipe implements PipeTransform {
  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }
}

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: any[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}