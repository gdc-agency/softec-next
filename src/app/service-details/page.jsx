import Wrapper from "@/layouts/wrapper";
import ServiceDetails from "@/components/service-details";

export const metadata = {
  title: "Service Details Page - Softec",
};

const ServiceDetailsPage = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
