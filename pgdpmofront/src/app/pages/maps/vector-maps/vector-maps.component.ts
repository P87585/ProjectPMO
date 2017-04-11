import { Component, ViewEncapsulation } from '@angular/core';
import { AppConfig } from "../../../app.config";
import { VectorMapsService } from './vector-maps.service';

@Component({
  selector: 'az-vector-maps',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './vector-maps.component.html',
  styleUrls: ['./vector-maps.component.scss'],
  providers: [ VectorMapsService ] 
})
export class VectorMapsComponent{
    bubbles: any;
    arcs: any;
    config: any;
    configFn: any;
    bgColor:string;

    constructor(private _vectorMapsService:VectorMapsService, private _appConfig:AppConfig){
        this.bubbles = this._vectorMapsService.getBubbles();
        this.arcs = this._vectorMapsService.getArcs();
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;       
    }

    ngAfterViewInit() {        
        var bubblemap = new Datamap({
            element: document.getElementById("bubble-map"),
            scope: 'world',
            responsive: true,
            fills: {
                defaultFill: this.configFn.rgba(this.config.colors.gray, 0.4),
                danger: this.config.colors.danger
            },
            geographyConfig: {
                borderWidth: 0.7,
                borderColor: this.config.colors.default,
                highlightFillColor: this.config.colors.sidebarBgColor,
                highlightBorderColor: this.config.colors.default,
                highlightBorderOpacity: 0.8,
                highlightBorderWidth: 1
            }
        });

        bubblemap.bubbles(this.bubbles, {
            popupTemplate: function(geo, data) {
                return "<div class='hoverinfo'><b>" + data.city + "</b><br/>" + 
                       "Country: <i>" + data.country +"</i>,<br/>" + 
                       "Population: <i>" + data.population +"</i>,<br/> " + 
                       "Growth rate (2010-2015): <i>" + data.rate +"</i>,<br/>" +
                       "More info: <u>" + decodeURI(data.link) + "</u></div>";
            },
            fillOpacity: 0.7,
            highlightFillColor: this.config.colors.main,
            highlightBorderColor: this.configFn.rgba(this.config.colors.default, 0.7),
            highlightFillOpacity: 0.8,
        });
       
        d3.selectAll(".datamaps-bubble").on('click', function(city) {
            window.open(city.link);
        }); 

        jQuery('#bubble-map-widget').on("fullscreened.widgster", function(){
            bubblemap.resize();
        }).on("restored.widgster", function(){
            bubblemap.resize();
        }); 

        var arcsmap = new Datamap({
            element: document.getElementById("arcs-map"),
            scope: 'usa',
            responsive: true,
            fills: {
                defaultFill: this.configFn.rgba(this.config.colors.gray, 0.4),
                info: this.config.colors.info
            },
            data: {
                'TX': { fillKey: 'info' },
                'FL': { fillKey: 'info' },
                'NC': { fillKey: 'info' },
                'CA': { fillKey: 'info' },
                'NY': { fillKey: 'info' },
                'CO': { fillKey: 'info' }
            },
             geographyConfig: {
                borderWidth: 0.7,
                borderColor: this.config.colors.default,
                highlightFillColor: this.config.colors.sidebarBgColor,
                highlightBorderColor: this.config.colors.default,
                highlightBorderOpacity: 0.8,
                highlightBorderWidth: 1
            }
         });
            
         arcsmap.arc(this.arcs, {strokeWidth: 1, arcSharpness: 1.4});
     

        jQuery('#arcs-map-widget').on("fullscreened.widgster", function(){
            arcsmap.resize();
        }).on("restored.widgster", function(){
            arcsmap.resize();
        }); 


        window.addEventListener('resize', function() {
            bubblemap.resize();
            arcsmap.resize();
        });   
    }

    public changeBg(param):void {
        this.bgColor = param;
    }

}