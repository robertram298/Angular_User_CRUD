import { Directive, HostListener,Pipe, PipeTransform } from "@angular/core";

@Directive({
    selector:'[appDecimal]'
})
export class NumberDirective {
    @HostListener('input',['$event']) onInput(event:Event){

    }
}

@Pipe({
    name:'SentenceCase',pure:true
})
export class SentenceCasePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        
    }
}