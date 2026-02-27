import { Card, CardContent } from '../components/ui/card';

export function Disclaimer() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 22, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Website Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  This Website and the information, tools and material contained in it (this "Site") are not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or which would subject CRESTVEXA or its affiliates (collectively "CRESTVEXA") to any registration or licensing requirement within such jurisdiction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Information Accuracy</h2>
                <p className="text-muted-foreground mb-4">
                  This Site is subject to periodic update and revision. Materials should only be considered current as of the date of initial publication appearing thereon, without regard to the date on which you may access the information. CRESTVEXA maintains the right to delete or modify information on this Site without prior notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">No Financial Advice</h2>
                <p className="text-muted-foreground mb-4">
                  Past financial performance should not be taken as an indication or guarantee of future performance, and no representation or warranty, express or implied is made regarding future performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">No Offer or Solicitation</h2>
                <p className="text-muted-foreground mb-4">
                  Access to information on this site does not in any manner constitute an offer to sell or a solicitation of any offer to buy any of the securities of CRESTVEXA. The information on this site is not and is under no circumstances to be construed as, an advertisement or a public offering of the securities of CRESTVEXA or any other security that may be described herein. No securities regulatory body or similar authority in any jurisdiction has reviewed or in any way passed upon or endorsed the information on this site or the merits of the securities that may be described herein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Authorized Use</h2>
                <p className="text-muted-foreground mb-4">
                  CRESTVEXA authorizes you to view and download the information ("Materials") at this Web site ("Site") only for personal, non-commercial use.
                </p>
                <p className="text-muted-foreground mb-4">
                  THIS AUTHORIZATION IS NOT A TRANSFER OF TITLE IN THE MATERIALS AND COPIES OF THE MATERIALS AND IS SUBJECT TO THE FOLLOWING RESTRICTIONS:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Retain, on all copies of the Materials downloaded, all copyright, trademarks and other proprietary notices contained in the Materials</li>
                  <li>Not modify the Materials in any way nor reproduce or display, perform, or distribute or otherwise use them for any public or commercial purpose</li>
                  <li>Not transfer the Materials to any other person unless you give them notice of, and they agree to accept, the obligations arising under these terms and conditions of use</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Prohibited Actions</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Interrupt or attempt to interrupt the operation of the site in any way</li>
                  <li>Intrude or attempt to intrude into the site in any way</li>
                  <li>Post any obscene, defamatory or annoying materials on the site</li>
                  <li>Obscure any materials, including any notice, already posted on the site</li>
                  <li>Use the site or any contents thereof to defame, intimidate, annoy or otherwise cause nuisance or breach the rights of any person</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall CRESTVEXA and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of this site/services, with the delay or inability to use the site/services or related services, the provision of or failure to provide services, or for any information, products, services and material obtained through this site, or otherwise arising out of the use of this site/services, whether based on contract, tort, negligence, strict liability or otherwise, even if CRESTVEXA or any of its suppliers has been advised of the possibility of damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Disclaimer, please contact us at info@crestvexa.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
