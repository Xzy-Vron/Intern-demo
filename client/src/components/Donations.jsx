import React from 'react'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp } from "lucide-react";

export default function Donations({price}) {
  return (
    <div>
      <Card className="@container/card ">
        <CardHeader>
          <CardDescription>Total Donations</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₹{price}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Thank you for all the Donations <TrendingUp size={30}/>
          </div>
          <div className="text-muted-foreground">
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
