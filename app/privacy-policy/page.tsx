import Header from "@/lib/ui/heading";

export default function PrivacyPolicy() {
  return (
    <section>
      {/**header */}
      <Header
        name="Privacy policy"
        type="h1"
        className="text-[40px] text-center py-8"
      />
      {/**sub header */}
      <div className="font-bold text-lg py-4 px-10 ">
        <span className="font-amazingSlab">Last Update:</span> 22/10/2025
      </div>
      {/**content */}
      <div className="text-lg font-amazingSlab px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Privacy Policy & Data Usage – Heireach Media</h3>
      <p className="text-md font-amazingSlab"> Heireach Media is committed to protecting the privacy, confidentiality, and security of all client information, user data, and leads generated through our marketing activities. This policy outlines how data is collected, used, stored, and transferred in a transparent and compliant manner.</p>
      </div>
       <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Data Collection</h3>
      <p className="text-md font-amazingSlab">Heireach Media may collect information through digital marketing activities including but not limited to Meta Ads, Google Ads, landing pages, websites, forms, WhatsApp broadcasts, CRM tools, and analytics platforms. The data collected may include names, contact details, location data, inquiry details, and engagement metrics.
</p>
      </div>
       <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Purpose of Data Usage</h3>
      <p className="text-md font-amazingSlab"> All data collected is used strictly for:
            <ul className="list-disc list-inside"> 
              <li >Campaign execution and performance optimization</li>
              <li >Lead generation and inquiry management
</li>
              <li >Remarketing and audience targeting as per campaign objectives
</li>
              <li >Reporting, analytics, and service improvement
</li>
            </ul>
   Data is never used for any unlawful, misleading, or unauthorized purposes.

</p>
      </div>
       <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Lead Ownership & Client Data
</h3>
      <p className="text-md font-amazingSlab"> All leads and data generated through paid or organic campaigns are treated as <b> confidential</b>. During the active service period, data may be accessed and processed by Heireach Media solely for campaign management, optimization, and remarketing purposes as agreed upon with the client. </p>
      <p className="text-md font-amazingSlab">Once the service engagement is completed or terminated: </p>

            <ul className="list-disc list-inside"> 
              <li >Complete campaign-related data and leads will be handed over to the client
</li>
              <li >Heireach Media will no longer actively use the client’s data unless explicitly authorized

</li>
              <li >Ownership of the leads and data remains with the client

</li>
            </ul>


      </div>
      <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Remarketing & Advertising Use</h3>
      <p className="text-md font-amazingSlab"> Remarketing activities are conducted only:

            <ul className="list-disc list-inside"> 
              <li >As part of the agreed marketing strategy
</li>
              <li >In compliance with Google, Meta, and applicable advertising platform policies

</li>
              <li >Using consent-based data where applicable

</li>
             
            </ul>
          Heireach Media does not sell, rent, or misuse client data or leads.


</p>
      </div>
       <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Data Security & Confidentiality</h3>
      <p className="text-md font-amazingSlab"> We implement appropriate technical and organizational measures to safeguard all data against unauthorized access, misuse, loss, or disclosure. Access to client data is restricted strictly to authorized personnel involved in campaign execution.

</p>
      </div>
       <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Third-Party Platforms</h3>
      <p className="text-md font-amazingSlab"> Advertising platforms, analytics tools, and communication platforms used by Heireach Media may have their own privacy policies. Heireach Media is not responsible for the independent practices of third-party platforms but ensures compliant usage aligned with their terms.


</p>
      </div>
       <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Compliance & Transparency</h3>
      <p className="text-md font-amazingSlab"> Heireach Media operates in accordance with applicable data protection regulations, advertising policies, and platform compliance requirements. We maintain transparency in how data is handled and respect the trust placed in us by our clients.


</p>
      </div>
      <div className="text-lg font-amazingSlab mt-10  px-10">
      <h3 className="text-lg font-amazingSlab font-bold mb-2">Policy Updates
</h3>
      <p className="text-md font-amazingSlab"> This Privacy Policy may be updated periodically to reflect changes in regulations, platform policies, or business practices. Continued use of our services constitutes acceptance of the updated policy.

</p>
      </div>
    </section>
  );
}
