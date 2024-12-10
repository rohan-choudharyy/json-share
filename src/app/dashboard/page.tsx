import JsonEditor from "@/components/JsonEditor"
export default function DashBoardPage() {
    return <div>
    <div className="my-8">
        <h1 className="text-3xl font-bold">DashBoard</h1>
        <p className="text-muted-foreground">Manage your data and share it with others.</p>
    </div>
    <JsonEditor />
    </div>
}