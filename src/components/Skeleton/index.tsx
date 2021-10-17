import { SkeletonWrapper } from './styles';

interface SkeletonProps {
  width?: string;
  height?: string;
}

function Skeleton({ width = '300px', height = '40px' }: SkeletonProps) {
  return <SkeletonWrapper css={{ width, height }}></SkeletonWrapper>;
}

export default Skeleton;
