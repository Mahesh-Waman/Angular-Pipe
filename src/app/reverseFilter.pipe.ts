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



@Pipe({name: 'concatstring'})
export class concatStringPipe implements PipeTransform {
  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }
}

@Pipe({ name: 'filterList' })
export class FilterListPipe implements PipeTransform {
  transform(list: any[]) {
    return list.filter(item => item.canFly);
  }
}
@Pipe (
    {
        name :'listFilter'
    }
)

export class ListFilterPipe implements PipeTransform{
    transform (list : any [],searchString:string):any[]{
        if(!list){return [];}
        else if(!searchString){
            return list;
        }
        else {
            searchString=searchString.toLowerCase();

            return list.filter(item=>{
                return item.name.toLowerCase().includes(searchString);
            })
        }


    }
}