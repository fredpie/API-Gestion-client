import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Création de clients de test
  const client1 = await prisma.client.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      contact: '123-456-7890',
    },
  });

  const client2 = await prisma.client.create({
    data: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      contact: '987-654-3210',
    },
  });

  // Création d'entrepreneurs de test (contractors)
  const contractor1 = await prisma.contractor.create({
    data: {
      firstName: 'Bob',
      lastName: 'Builder',
      email: 'bob.builder@example.com',
      contact: '555-555-5555',
    },
  });

  const contractor2 = await prisma.contractor.create({
    data: {
      firstName: 'Alice',
      lastName: 'Architect',
      email: 'alice.architect@example.com',
      contact: '444-444-4444',
    },
  });

  // Création de projets de test
  await prisma.project.createMany({
    data: [
      {
        name: 'Kitchen Renovation',
        description: 'Complete kitchen overhaul with modern appliances.',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-03-01'),
        budget: 15000,
        clientId: client1.id,
        contractorId: contractor1.id,
      },
      {
        name: 'Bathroom Renovation',
        description: 'Renovating the bathroom with new fixtures and tiles.',
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-04-01'),
        budget: 8000,
        clientId: client2.id,
        contractorId: contractor2.id,
      },
      {
        name: 'Living Room Extension',
        description: 'Extending the living room for more space and light.',
        startDate: new Date('2024-03-01'),
        endDate: null,
        budget: 20000,
        clientId: client1.id,
        contractorId: contractor2.id,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
