import { Injectable } from '@angular/core';

export class Mail {
    constructor(public id: number,
                public sender: string,
                public senderMail: string,
                public subject: string,
                public date:string,
                public body: string,
                public attachment:boolean,
                public attachments: string[],
                public unread: boolean,
                public sent: boolean,
                public starred: boolean,
                public draft: boolean,
                public trash: boolean,
                public selected:boolean) { }
}

let Mails = [
  new Mail(
      1, 
      'Envato Market', 
      'do-not-reply@market.envato.com', 
      'Your updated item has been approved',
      '4:08 PM',
      '<p>Congratulations! Your update to Azimuth - Angular 2 Admin Template on ThemeForest has been approved. '+
      'You can view your item here: </p>'+
      '<p><a href="http://themeforest.net/item/azimuth-angular-2-admin-template/19182105" target="blank">http://themeforest.net/item/azimuth-angular-2-admin-template/19182105</a></p>' +
      '<p>Thanks for your submission!</p>' +
      '<p>Regards,<br> Envato Market Team</p>', 
      false,
      [],
      true,
      false,
      false,
      false,
      false,
      false 
  ),
  new Mail(
      2,
      'Josiah Fromdahl',
      'Reekie8647@gmail.com',
      'Useful tool for those who are involved in SEO',
      '9:47 AM',
      '<p>Hi, I want to introduce the Website Reviewer is an incredibly useful tool for those who are involved in SEO and web designing. '+
      'This particular tool will provide you with quick website review and SEO audit of the websites you’ve created so '+
      'you will be able to determine if and where any changes should be made so you can make it as effective '+
      'as possible when it comes to getting visitors and keeping them interested. '+
      'Unlike many similar tools, website reviewer is completely free.</p>',
      true,
      ['assets/img/app/snow.jpg', 'assets/img/app/sample.jpg'],
      true,
      false,
      true,
      false,
      false,
      false 
  ),
  new Mail(
      3,
      'Google Cloud Platform',
      '<CloudPlatform-noreply@google.com>',
      'Lessons from the field: surviving success with Customer Reliability Engineering',
      'Jan 5',
      '<h4>TRENDING</h4>'+
      '<p>For those who missed the early adoption of Infrastructure as a Service circa 2007,' +
      'this in-depth history stresses why businesses need to begin building around "serverless" architectures.</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      4,
      'Microsoft Visual Studio',
      'MVS@e-mail.microsoft.com',
      'Welcome to Visual Studio Team Services',
      '24.12.2016',
      'Whether your teams develop in Java, .NET, or in multiple languages, Visual Studio Team Services offers an open, cloud-hosted development hub. Use your favorite IDE, develop in any language, and empower your teams to iterate rapidly',
      false,
      [],
      true,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      5,
      'Draft',
      '',
      'no subject',
      '4:46 PM',
      '',
      false,
      [],
      false,
      false,
      false,
      true,
      false,
      false
  ),
  new Mail(
      6,
      'Draft',
      '',
      'Please confirm your email',
      'Jan 7',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. Phasellus pharetra nunc eu dui hendrerit, quis ullamcorper tortor malesuada. Nullam ante mi, auctor eu nunc vitae, gravida molestie arcu.',
      false,
      [],
      false,
      false,
      false,
      true,
      false,
      false
  ),
  new Mail(
      7,
      'MailChimp',
      'hello@mailchimp.com',
      'Our 2016 annual report',
      '22.12.2016',
      '<p>For our 2016 annual report, we let our design team run wild with our most fun facts and proudest moments from the year. From GIFs in email campaigns to physical tons of infrastructure added to dollars raised for charity, it’s our year in numbers.</p>' +
      '<p>We’re proud of our new features, our customer support tickets solved, and our philanthropy in Atlanta. But we’re even more proud of you and the billions of emails you’ve sent to grow your businesses your way in 2016. Keep up the good work!</p>' +
      '<p>Cheers to the new year,</p>' +
      '<p>MailChimp</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      8,
      'Bluehost',
      'no-reply@e.bluehost.com',
      'Your domain privacy may be at risk',
      '20.12.2016',
      '<h4>New ICANN Rules Require Accurate Contact Information</h4>'+
      '<p>Your domain information may be at risk. However, you can protect your information with domain privacy.</p>' +
      '<p>Protect yourself with Domain Privacy.</p>'+
      '<p><small>Only $11.88 per year.**</small></p>' +
      '<p><a href="http://bluehost.com/" target="blank" class="btn btn-success">Get started</a></p>',
      false,
      [],
      false,
      false,
      true,
      false,
      false,
      false
  ),
  new Mail(
      9,
      'Vimeo',
      'vimeo@email.vimeo.com',
      'The year\'s best videos and milestones',
      '20.12.2016',
      '<h4>Now presenting: 2016\'s best videos</h4>'+
      '<p>Every day, the world\'s best creators upload their videos to Vimeo. And now, the most inventive, most striking, most all-around mind-blowing videos of 2016 are in. Enjoy, wondrous humans.</p>' +
      '<p><a href="https://vimeo.com/blog/post/The-Top-Videos-of-2016?utm_source=email&utm_medium=vimeo-decembernewsletter-201612&utm_campaign=30389" target="blank" class="btn btn-info">See the list</a></p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      10,
      'Andy Dufresne',
      'andy.dufresne@gmail.com',
      'The Shawshank Redemption',
      '18.11.2016',
      '<p>From Wikipedia, the free encyclopedia</p>' +
      '<p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, '+
      'a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, '+
      'and finds himself protected by the guards after the warden begins using him in his money-laundering operation.</p>',
      false,
      [],
      false,
      true,
      false,
      false,
      false,
      false
  ),
  new Mail(
      11,
      'The Envato Team',
      'donotreply@envato.com',
      'Author Driven Pricing on ThemeForest, CodeCanyon and 3DOcean',
      '05.09.2016',
      '<h5>Hey Envato Community Members!</h5>' + 
      '<p>As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Envato Market. So far this has included GraphicRiver and a handful of categories within ThemeForest.</p>' +
      '<p>In a few weeks, we\'ll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of Envato Market. These areas are:</p>' +
      '<ul><li>All remaining ThemeForest categories (including WordPress). </li><li>All categories on CodeCanyon.</li><li>All categories on 3DOcean</li></ul>' +
      '<p>We strongly recommend reading the full announcement on our forums where you will find:</p>' +
      '<ul><li>More details about the change.</li><li>How ADP has impacted pricing on previous categories.</li><li>Technical details regarding how to set prices.</li> <li>Why we’ve made the change. </li></ul>' +
      '<p>You will also be able to ask any questions you might have.</p>' +
      '<p>We will send you another email to let you know when this feature goes live.</p>' +
      '<p>All the best,</p>'+
      '<p>The Envato Team</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      12,
      'Jonathan Cantu',
      'JCantu@billingsleyco.com',
      'Ability to Customize',
      '02.09.2016',
      '<p>Hi,</p><p>Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p><p>Thanks</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      13,
      'Jennifer Adam',
      'jenniferadam2009@gmail.com',
      'Guest Post Request - 2016 !!!',
      '09.05.2016',
      '<p><b>Hello,</b></p>'+
      '<p>I\'m Jennifer, constant follower of your blog posts and I\'ve liked most of the blog posts written here. I could realize you\'ve already published some great guest posts from different authors with distinct styles '+
      'and I\'d be privileged if I were provided with an opportunity to delight your blog followers with some informative blog posts.</p>' +
      '<p>I\'m a content expert and I\'ve contributed some sensible and informative articles to surplus niche-specific blogs. I realize the value of content and its part in helping out numerous people out there in the space. </p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  )
];

let mailsPromise = Promise.resolve(Mails);

@Injectable()
export class MailService {

    public getInboxMails() {
         return mailsPromise
         .then(mails => mails.filter(mail => mail.sent == false && mail.draft == false && mail.trash == false));
    }
   
    public getStarredMails() {
         return mailsPromise
         .then(mails => mails.filter(mail => mail.starred == true));
    }

    public getSentMails() {
         return mailsPromise
         .then(mails => mails.filter(mail => mail.sent == true));
    }

    public getDraftMails() {
         return mailsPromise
         .then(mails => mails.filter(mail => mail.draft == true));
    }

    public getTrashMails() {
         return mailsPromise
         .then(mails => mails.filter(mail => mail.trash == true));
    }

    public getMail(id: number | string) {
        return mailsPromise
        .then(mails => mails.find(mail => mail.id === +id));
    }
    
}