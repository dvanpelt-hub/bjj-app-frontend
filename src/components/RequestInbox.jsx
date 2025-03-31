import React from "react";
import { Card, Avatar, Button, Badge } from "antd";

const RequestInbox = () => {
  let requestsSample = [
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=12",
      date: "April 2",
      time: "5:00 PM",
      message: 'Hey I"d like to schedule a private lesson on guard passing.',
      status: "new",
    },
    {
      name: "Sarah Lee",
      avatar: "https://i.pravatar.cc/150?img=18",
      date: "April 4",
      time: "2:30 PM",
      message: "Can you do a one-on-one session for takedown drills?",
      status: "read",
    },
  ];

  return (
    <div className="p-4 space-y-4 bg-gray-950 min-h-screen text-white">
      <h2 className="text-xl font-semibold mb-2">Inbox</h2>

      {requestsSample.length === 0 ? (
        <p className="text-gray-500">No private lesson requests yet.</p>
      ) : (
        requestsSample.map((req, index) => (
          <Card key={index} className="bg-gray-800 border-none text-white">
            <div className="flex items-start space-x-4">
              <Avatar src={req.avatar} size="large" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">{req.name}</p>
                    <p className="text-sm text-gray-400">
                      {req.date} · {req.time}
                    </p>
                  </div>
                  <Badge
                    count={req.status === "new" ? "New" : 0}
                    style={{ backgroundColor: "#f5222d" }}
                    offset={[-8, 0]}
                  />
                </div>
                <p className="mt-2 text-gray-300 text-sm">{req.message}</p>

                <div className="mt-4 flex gap-2">
                  <Button type="primary" size="small">
                    Accept
                  </Button>
                  <Button danger size="small">
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default RequestInbox;
