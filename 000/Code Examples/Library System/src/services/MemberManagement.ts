import { Member } from "../models/Member";

export class MemberManagement {
    private members: Map<string, Member> = new Map();

    registerMember(member: Member): void {
        this.members.set(member.memberId, member);
    }

    getMember(memberId: string): Member | undefined {
        return this.members.get(memberId);
    }
}
