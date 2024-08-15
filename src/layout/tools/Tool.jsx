import { generateImagesByPrompt } from "@/actions";
import ImageCarousel from "@/components/ImageCarousel";
import Wrapper from "@/components/Wrapper";
import { toolsCarouselData } from "@/constants";
const Tool = async () => {
    // const response = await generateImagesByPrompt()
    // console.log(response, "hello world")
  return (
    <Wrapper className="mb-12">
      <div className="mb-4">
        <h3 className="text-sm sm:text-md lg:text-[1.5rem] sm:text-lg font-semibold">
          Free tools to skyrocket your creative freedom
        </h3>
      </div>
      <ImageCarousel data={toolsCarouselData}/>
    </Wrapper>
  );
};

export default Tool;
