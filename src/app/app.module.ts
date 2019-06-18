import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { UserService } from './services/user.service.client';
import { CourseNavigatorServiceClient } from './services/CourseNavigatorServiceClient';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { PageComponent } from './layout-editor/page/page.component';
import { RowComponent } from './layout-editor/row/row.component';
import { ColumnComponent } from './layout-editor/column/column.component';
import { WidgetComponent } from './layout-editor/widgets/widget/widget.component';
import { HeadingComponent } from './layout-editor/widgets/heading/heading.component';
import { ParagraphComponent } from './layout-editor/widgets/paragraph/paragraph.component';
import { WidgetToolbarComponent } from './layout-editor/widgets/widget-toolbar/widget-toolbar.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import Model from './models/Model';
import { ColumnToolbarComponent } from './column-toolbar/column-toolbar.component';
import LayoutService from './services/LayoutService';
import { WebsiteListComponent } from './website-list/website-list.component';
import WebsiteService from './services/WebsiteService';
// import { WidgetEditorComponent } from './widget-editor/widget-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    PageComponent,
    RowComponent,
    ColumnComponent,
    WidgetComponent,
    HeadingComponent,
    ParagraphComponent,
    WidgetToolbarComponent,
    LessonListComponent,
    ColumnToolbarComponent,
    WebsiteListComponent,
    // WidgetEditorComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    CourseNavigatorServiceClient,
    WebsiteService
    // Model,
    // LayoutService
    // PageModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
