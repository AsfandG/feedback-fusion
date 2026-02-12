import { GradientHeader } from "@/components/gradient-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart,
  Map,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <GradientHeader
        title="Shape the future of our product "
        subtitle="Feedback Fusion is where your ideas come to life. Suggest features, vote on what matters most, and follow our public roadmap."
      >
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/feedback/new">
              Submit Feedback <ArrowRight className="w-4 h-4 ml-2" />{" "}
            </Link>
          </Button>
          <Button asChild className="bg-white text-black hover:bg-gray-100">
            <Link href="/roadmap">
              View Roadmap <Map className="w-4 h-4 ml-2" />{" "}
            </Link>
          </Button>
        </div>
      </GradientHeader>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <MessageSquare className="w-6 h-6 text-primary mb-2" />
              <CardTitle> Submit Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Share your suggestion and features requests with the community
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="w-6 h-6 text-primary mb-2" />
              <CardTitle> Vote & Prioritize</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Upvote idead you love to help us understand what matters most.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-6 h-6 text-primary mb-2" />
              <CardTitle> Track Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Follow our public roadmap to see what we&#39;re working on next.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-6 h-6 text-primary mb-2" />
              <CardTitle> See Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Watch as your feedback transforms into real features and
                improvements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
