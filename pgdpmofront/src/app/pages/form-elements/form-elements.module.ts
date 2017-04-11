import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { InputsComponent } from './inputs/inputs.component';
import { FileUploaderComponent } from './inputs/file-uploader/file-uploader.component';
import { ImageUploaderComponent } from './inputs/image-uploader/image-uploader.component';
import { MultipleImageUploaderComponent } from './inputs/multiple-image-uploader/multiple-image-uploader.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ValidationsComponent } from './validations/validations.component';
import { WizardComponent } from './wizard/wizard.component';


export const routes = [
  { path: '', redirectTo: 'inputs', pathMatch: 'full'},
  { path: 'inputs', component: InputsComponent, data: { breadcrumb: 'Inputs' } },
  { path: 'layouts', component: LayoutsComponent, data: { breadcrumb: 'Layouts' } },
  { path: 'validations', component: ValidationsComponent, data: { breadcrumb: 'Validations' } },
  { path: 'wizard', component: WizardComponent, data: { breadcrumb: 'Wizard' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InputsComponent,
    FileUploaderComponent,
    ImageUploaderComponent,
    MultipleImageUploaderComponent,
    LayoutsComponent,
    ValidationsComponent,
    WizardComponent
  ]
})
export class FormElementsModule { }
